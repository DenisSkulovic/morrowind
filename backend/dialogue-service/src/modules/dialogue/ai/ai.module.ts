import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AiService } from './ai.service';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'AI_SERVICE_OPEN_AI_V1',
                transport: Transport.GRPC,
                options: {
                    package: 'ai_service_openai_v1',
                    protoPath: join(__dirname, '../../proto/ai_service_openai_v1.proto'),
                }
            }
        ]),
        // ClientsModule.register([
        //     {
        //         name: 'AI_SERVICE_CLAUDE_V1',
        //         transport: Transport.GRPC,
        //         options: {
        //             package: 'ai_service_claude_v1',
        //             protoPath: join(__dirname, '../../proto/ai_service_claude_v1.proto'),
        //         }
        //     }
        // ]),
    ],
    providers: [AiService],
    exports: [AiService]
})
export class AiModule { }
