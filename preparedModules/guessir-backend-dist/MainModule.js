var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TextsController } from './conrollers/TextsController';
import { applyDbMigrations, getTypeOrmConfig, isDbEnabled } from './dbUtils';
import { TextEntity } from './entities/TextEntity';
let MainModule = class MainModule {
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
    })
], MainModule);
export { MainModule };
function getTypeOrmModule() {
    const config = getTypeOrmConfig();
    const { entities } = config;
    if (isDbEnabled()) {
        return TypeOrmModule.forRoot(config);
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