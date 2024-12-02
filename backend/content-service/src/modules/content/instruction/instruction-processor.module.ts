import { Module } from '@nestjs/common';
import { InstructionProcessorService } from './instruction-processor.service';

@Module({
    providers: [InstructionProcessorService],
    exports: [InstructionProcessorService],
})
export class InstructionProcessorModule { }
