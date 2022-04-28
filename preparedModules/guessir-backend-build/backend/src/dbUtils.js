"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDbEnabled = exports.applyDbMigrations = void 0;
const typeorm_1 = require("typeorm");
const umzug_1 = require("umzug");
const migrationTable = 'migrations';
const getContext = () => {
    return {
        query: (sql, parameters) => (0, typeorm_1.getConnection)().manager.query(sql, parameters),
    };
};
const migrator = new umzug_1.Umzug({
    migrations: {
        glob: ['migrations/*.ts', { cwd: __dirname }],
    },
    context: getContext(),
    storage: {
        async executed({ context: client }) {
            await client.query(`create table if not exists ${migrationTable}(name text)`);
            const resuls = await client.query(`select name from ${migrationTable}`);
            return resuls.map((result) => result.name);
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
async function applyDbMigrations() {
    await migrator.up();
}
exports.applyDbMigrations = applyDbMigrations;
const isDbEnabled = () => {
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
exports.isDbEnabled = isDbEnabled;
//# sourceMappingURL=dbUtils.js.map