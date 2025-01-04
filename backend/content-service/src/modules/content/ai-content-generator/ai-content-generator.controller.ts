import { Controller, Inject, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Server } from 'socket.io';
import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { AiContentGeneratorService } from './ai-content-generator.service';


@Controller()
@WebSocketGateway()
export class AiContentGeneratorController {
    private readonly logger = new Logger(AiContentGeneratorController.name);

    @WebSocketServer()
    server!: Server;

    constructor(
        @Inject('IAiContentGeneratorService') private readonly aiContentGeneratorService: AiContentGeneratorService,
    ) { }

    @GrpcMethod('AiContentGeneratorService', 'GenerateContent')
    async generateContent(request: {
        contentType: string;
        parameters: any;
        requestId: string;
    }): Promise<any> {
        this.logger.debug(`Received gRPC request:
            Method: AiContentGeneratorService.generateContent
            Request: ${JSON.stringify(request)}
        `);

        // Create an observable from the AI service stream
        const contentStream = await this.aiContentGeneratorService.generateContentStream(request);

        // Process each chunk from the stream
        contentStream.subscribe({
            next: (chunk) => {
                // Emit each chunk to WebSocket clients
                this.server.emit('contentGeneratedChunk', {
                    requestId: request.requestId,
                    chunk: chunk,
                    isComplete: false
                });
            },
            error: (error) => {
                this.logger.error(`Error generating content: ${error.message}`);
                this.server.emit('contentGeneratedError', {
                    requestId: request.requestId,
                    error: error.message
                });
            },
            complete: () => {
                // Emit completion event
                this.server.emit('contentGeneratedComplete', {
                    requestId: request.requestId,
                    isComplete: true
                });
            }
        });

        // Return initial acknowledgment
        return {
            success: true,
            requestId: request.requestId,
            message: 'Content generation started'
        };
    }
}
