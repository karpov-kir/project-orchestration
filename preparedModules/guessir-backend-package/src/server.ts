// Required for TypeORM
import 'reflect-metadata';

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

import { isDbEnabled } from './dbUtils';
import { MainModule } from './MainModule';

// TODO set up CORS

export async function boot(host = '0.0.0.0', port = 3020) {
  const logger = new Logger(boot.name);

  if (isDbEnabled()) {
    logger.log('Using a persistent DB');
  } else {
    logger.log('Using an in memory DB');
  }

  const app = await NestFactory.create<NestFastifyApplication>(
    MainModule,
    new FastifyAdapter({
      logger: true,
    }),
  );

  app.useGlobalPipes(
    new ValidationPipe({
      // If set to true, validator will strip validated (returned) object of any properties that do not use any validation decorators
      whitelist: true,
      // With the auto-transformation option enabled, the ValidationPipe will also perform conversion of primitive types
      transform: false,
      // If set to true, instead of stripping non-whitelisted properties validator will throw an exception
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(port, host);
}
