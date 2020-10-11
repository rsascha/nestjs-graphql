import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const logger = new Logger('bootstrap');
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(3000);
    const appUrl = await app.getUrl();
    logger.log(`Application is running on: ${appUrl}`);
    logger.log(`GraphQL Playground is running on: ${appUrl}/graphql`);
}
bootstrap();
