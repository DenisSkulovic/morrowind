import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

const PORT = process.env.PORT;
if (!PORT) throw new Error('PORT is not set');

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: ['error', 'warn', 'debug', 'log', 'verbose'],
    });

    // Enable CORS
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        allowedHeaders: ['Content-Type', 'Accept', 'Authorization', 'application/x-protobuf', 'application/x-grpc-web', 'application/grpc-web', 'application/grpc-web+proto', 'x-grpc-web'],
        exposedHeaders: ['Content-Length', 'X-Kuma-Revision'],
        credentials: true,
    });
    console.log(`[ContentService - bootstrap] CORS enabled`);

    // Configure gRPC to listen on port PORT
    app.connectMicroservice({
        transport: Transport.GRPC,
        options: {
            url: `0.0.0.0:${PORT}`,
            package: [
                'entities',
                'account',
                'content',
                'world',
                'generator',
                'activity',
            ],
            protoPath: [
                join(__dirname, '../proto/entities.proto'),
                join(__dirname, '../proto/account.proto'),
                join(__dirname, '../proto/content.proto'),
                join(__dirname, '../proto/world.proto'),
                join(__dirname, '../proto/generator.proto'),
                join(__dirname, '../proto/activity.proto'),
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
    await app.listen(PORT);
    console.log(`Application is running on http://localhost:${PORT}`);
}

bootstrap();