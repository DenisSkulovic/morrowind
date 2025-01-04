import { Module } from '@nestjs/common';
import { DialogueModule } from './modules/dialogue/dialogue.module';

@Module({
    imports: [
        // Feature Modules
        DialogueModule,
    ],
})
export class AppModule { }
