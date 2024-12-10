import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: ['error', 'warn', 'debug', 'log', 'verbose'],
    });

    // Enable CORS
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        allowedHeaders: ['Content-Type', 'Accept', 'Authorization', 'application/x-protobuf'],
        exposedHeaders: ['Content-Length', 'X-Kuma-Revision'],
        credentials: true,
    });
    console.log(`[ContentService - bootstrap] CORS enabled`);

    // Configure gRPC to listen on port 50051
    app.connectMicroservice({
        transport: Transport.GRPC,
        options: {
            url: '0.0.0.0:50051',
            package: [
                'common',
                'account',
                'content',
                'world',
                'generator',
            ],
            protoPath: [
                join(__dirname, '../proto/common.proto'),
                join(__dirname, '../proto/account.proto'),
                join(__dirname, '../proto/content.proto'),
                join(__dirname, '../proto/world.proto'),
                join(__dirname, '../proto/generator.proto'),
            ],
            loader: {
                keepCase: true,
                longs: String,
                enums: String,
                defaults: true,
                oneofs: true,
            },
        },
    });

    await app.startAllMicroservices();
    await app.listen(3000);
    console.log(`Application is running on http://localhost:3000`);
}

bootstrap();