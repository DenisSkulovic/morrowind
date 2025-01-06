import { Module } from '@nestjs/common';
import { PromptService } from './prompt.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { DialogueStateModule } from '../dialogueState/dialogueState.module';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'ContentService',
                transport: Transport.GRPC,
                options: {
                    package: 'content',
                    protoPath: 'proto/content.proto',
                }
            }
        ]),
        DialogueStateModule
    ],
    providers: [PromptService],
    exports: [PromptService]
})
export class PromptModule { }
