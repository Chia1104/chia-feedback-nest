import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle("Chia's web")
    .setDescription("Chia's web REST API")
    .setVersion('1.0')
    .addTag('Auth')
    .addTag('Files')
    .addTag('Repos')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/documentation', app, document);
  await app.listen(3000);
}
bootstrap().then(() => console.log('Server running on port 3000'));
