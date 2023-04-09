import { dirname } from 'path';
import { DataSource } from 'typeorm';
import { Umzug } from 'umzug';
import { fileURLToPath } from 'url';
import { TextEntity } from './entities/TextEntity';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const migrationTable = 'migrations';
const entities = [TextEntity];
export const getTypeOrmConfig = () => ({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    // Handled manually using Umzug
    synchronize: false,
    logging: true,
    entities,
    subscribers: [],
    migrations: [],
});
const getContext = async () => {
    const dataSource = new DataSource(getTypeOrmConfig());
    const connection = await dataSource.initialize();
    return {
        query: (sql, parameters) => connection.manager.query(sql, parameters),
    };
};
export async function applyDbMigrations() {
    const migrator = new Umzug({
        migrations: {
            glob: ['migrations/*.ts', { cwd: __dirname }],
        },
        context: await getContext(),
        storage: {
            async executed({ context: client }) {
                await client.query(`create table if not exists ${migrationTable}(name text)`);
                const results = await client.query(`select name from ${migrationTable}`);
                return results.map((result) => result.name);
            },
            async logMigration({ name, context: client }) {
                await client.query(`insert into ${migrationTable}(name) values ($1)`, [name]);
            },
            async unlogMigration({ name, context: client }) {
                await client.query(`delete from ${migrationTable} where name = $1`, [name]);
            },
        },
        logger: console,
    });
    await migrator.up();
}
export const isDbEnabled = () => {
    if (process.env.DB === 'true') {
        ['DB_USER', 'DB_PW', 'DB_NAME', 'DB_HOST'].forEach((envName) => {
            if (!process.env[envName]) {
                throw new Error(`${envName} must be provided when DB is enabled`);
            }
        });
        return true;
    }
    return false;
};
//# sourceMappingURL=dbUtils.js.map