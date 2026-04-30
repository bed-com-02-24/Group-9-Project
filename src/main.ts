import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
=======

  // Allow requests from other origins (e.g. a frontend app)
  app.enableCors();

  // Automatically validate incoming request bodies using the DTO rules
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  console.log(`Server is running on http://localhost:${port}`);
>>>>>>> 8dfe44e (creted the endpoints for room, entities and dto)
}

void bootstrap();
