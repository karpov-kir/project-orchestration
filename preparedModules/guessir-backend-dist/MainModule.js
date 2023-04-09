var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { TextsController } from './conrollers/TextsController';
import { applyDbMigrations, isDbEnabled } from './dbUtils';
import { TextEntity } from './entities/TextEntity';
let MainModule = class MainModule {
    connection;
    constructor(connection) {
        this.connection = connection;
    }
    async onApplicationBootstrap() {
        if (isDbEnabled()) {
            await applyDbMigrations();
        }
    }
};
MainModule = __decorate([
    Module({
        imports: [getTypeOrmModule(), TypeOrmModule.forFeature([TextEntity])],
        controllers: [TextsController],
        providers: [],
    }),
    __metadata("design:paramtypes", [Connection])
], MainModule);
export { MainModule };
function getTypeOrmModule() {
    const entities = [TextEntity];
    if (isDbEnabled()) {
        return TypeOrmModule.forRoot({
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
    }
    return TypeOrmModule.forRoot({
        type: 'sqlite',
        database: ':memory:',
        synchronize: true,
        logging: true,
        entities,
        subscribers: [],
        migrations: [],
    });
}
//# sourceMappingURL=MainModule.js.map