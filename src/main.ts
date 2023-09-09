import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { VersioningType } from '@nestjs/common';
import { SwaggerModule} from '@nestjs/swagger';
import { join } from 'path';
import { configSwagger } from 'config/swagger/swaggerConfig';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true
  });

  app.enableVersioning({
    type: VersioningType.URI,
  });
  
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api', app, document);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs')
  app.useBodyParser('json');

  await app.listen(3000);
}
bootstrap();
