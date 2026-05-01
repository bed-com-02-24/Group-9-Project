import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
<<<<<<< HEAD
bootstrap();
=======
void bootstrap();
>>>>>>> 9078b7b054acb8f9f2a03e9e73fb83cf179f36f5
