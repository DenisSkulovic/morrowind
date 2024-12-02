import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { INestMicroservice } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Configure gRPC to listen on port 50051
    const grpcServer: INestMicroservice = await app.connectMicroservice({
        transport: Transport.GRPC,
        options: {
            url: '0.0.0.0:50051',
            package: [
                'account',
                'content',
                'world',
                'generator',
                'memory',
            ],
            protoPath: [
                'proto/account.proto',
                'proto/content.proto',
                'proto/world.proto',
                'proto/generator.proto',
                'proto/memory.proto',
            ],
        },
    });

    await app.startAllMicroservices();
    await app.listen(3000);
    console.log(`Application is running on http://localhost:3000`);
}

bootstrap();
