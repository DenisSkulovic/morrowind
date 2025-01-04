import { Module } from "@nestjs/common";
import { DialogueService } from "./dialogue.service";
import { DialogueController } from "./dialogue.controller";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { join } from "path";

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'AI_SERVICE',
                transport: Transport.GRPC,
                options: {
                    package: 'ai_service_openai_v1',
                    protoPath: join(__dirname, '../../proto/ai_service_openai_v1.proto'),
                }
            }
        ])
    ],
    controllers: [DialogueController],
    providers: [
        {
            provide: 'IDialogueService',
            useClass: DialogueService,
        },
        DialogueService,
    ],
    exports: ['IDialogueService', DialogueService],
})
export class DialogueModule { }
