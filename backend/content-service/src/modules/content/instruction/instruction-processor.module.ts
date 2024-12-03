import { Module } from '@nestjs/common';
import { InstructionProcessorService } from './instruction-processor.service';

@Module({
    providers: [
        {
            provide: 'IInstructionProcessorService',
            useClass: InstructionProcessorService,
        },
        InstructionProcessorService,
    ],
    exports: ['IInstructionProcessorService', InstructionProcessorService],
})
export class InstructionProcessorModule { }
