import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { HttpExceptionFilter } from './common/http-exception.filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  try {
    const PORT = process.env.PORT || 3000;

    const config = new DocumentBuilder()
      .setTitle('NestJS Cats API')
      .setDescription('API documentation for the Cats service')
      .setVersion('1.0')
      .build();

    const app = await NestFactory.create(MainModule, { cors: true });

    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, documentFactory);

    app.useGlobalFilters(new HttpExceptionFilter());

    await app.listen(PORT);

    console.log(`Application is running on: http://localhost:${PORT}`);

    process.on('SIGINT', () => {
      void (async () => {
        console.log('Gracefully shutting down...');
        await app.close();
        process.exit(0);
      })();
    });
  } catch (error) {
    console.error('Error during application bootstrap:', error);
    process.exit(1);
  }
}

void bootstrap();
