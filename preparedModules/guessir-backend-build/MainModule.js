"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const conrollers_1 = require("./conrollers");
const dbUtils_1 = require("./dbUtils");
const entities_1 = require("./entities");
let MainModule = class MainModule {
    constructor(connection) {
        this.connection = connection;
    }
    async onApplicationBootstrap() {
        if ((0, dbUtils_1.isDbEnabled)()) {
            await (0, dbUtils_1.applyDbMigrations)();
        }
    }
};
MainModule = __decorate([
    (0, common_1.Module)({
        imports: [getTypeOrmModule(), typeorm_1.TypeOrmModule.forFeature([entities_1.Text])],
        controllers: [conrollers_1.TextsController],
        providers: [],
    }),
    __metadata("design:paramtypes", [typeorm_2.Connection])
], MainModule);
exports.MainModule = MainModule;
function getTypeOrmModule() {
    const entities = [entities_1.Text];
    if ((0, dbUtils_1.isDbEnabled)()) {
        return typeorm_1.TypeOrmModule.forRoot({
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
    return typeorm_1.TypeOrmModule.forRoot({
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