import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { INestMicroservice } from '@nestjs/common';

import { join } from 'path';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

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
        },
    });

    await app.startAllMicroservices();
    await app.listen(3000);
    console.log(`Application is running on http://localhost:3000`);
}

bootstrap();
