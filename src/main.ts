import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //los datos de mas que no esten en el dto, se ignoran y no se reciben 
      forbidNonWhitelisted: true,
    }),
  )

  await app.listen(3000);
}
bootstrap();
