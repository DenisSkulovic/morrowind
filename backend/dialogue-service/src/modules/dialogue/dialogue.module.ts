import { Module } from "@nestjs/common";
import { DialogueService } from "./dialogue.service";
import { DialogueController } from "./dialogue.controller";
import { AiModule } from "../ai/ai.module";
import { ContentModule } from "../content/content.module";
import { PromptModule } from "../prompt/prompt.module";
import { DialogueStateModule } from "../dialogueState/dialogueState.module";

@Module({
    imports: [
        PromptModule,
        DialogueStateModule,
        AiModule,
        ContentModule,
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
