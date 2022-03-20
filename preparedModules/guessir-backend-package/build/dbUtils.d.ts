import { Umzug } from 'umzug';
interface MigrationContext {
    query: <T = unknown>(sql: string, parameters?: unknown[]) => Promise<T>;
}
declare const migrator: Umzug<MigrationContext>;
export declare type Migration = typeof migrator._types.migration;
export declare function applyDbMigrations(): Promise<void>;
export declare const isDbEnabled: () => boolean;
export {};
