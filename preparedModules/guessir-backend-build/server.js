"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boot = void 0;
// Required for TypeORM
require("reflect-metadata");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const fastify_helmet_1 = require("fastify-helmet");
const dbUtils_1 = require("./dbUtils");
const MainModule_1 = require("./MainModule");
async function boot(host = '0.0.0.0', port = 3020) {
    const logger = new common_1.Logger(boot.name);
    if ((0, dbUtils_1.isDbEnabled)()) {
        logger.log('Using a persistent DB');
    }
    else {
        logger.log('Using an in memory DB');
    }
    const allowedOrigins = ['http://localhost:3010', 'http://guessir.k-k.local', 'https://guessir.k-k.io'];
    const app = await core_1.NestFactory.create(MainModule_1.MainModule, new platform_fastify_1.FastifyAdapter({
        logger: true,
    }));
    await app.register(fastify_helmet_1.fastifyHelmet);
    app.enableCors({
        origin: (origin, callback) => {
            const isAllowed = !origin || allowedOrigins.includes(origin);
            if (isAllowed) {
                callback(null, true);
            }
            else {
                callback(new common_1.NotAcceptableException('Not allowed by CORS'));
            }
        },
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        // If set to true, validator will strip validated (returned) object of any properties that do not use any validation decorators
        whitelist: true,
        // With the auto-transformation option enabled, the ValidationPipe will also perform conversion of primitive types
        transform: false,
        // If set to true, instead of stripping non-whitelisted properties validator will throw an exception
        forbidNonWhitelisted: true,
    }));
    await app.listen(port, host);
}
exports.boot = boot;
//# sourceMappingURL=server.js.map