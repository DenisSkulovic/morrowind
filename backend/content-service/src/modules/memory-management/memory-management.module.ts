import { Module } from '@nestjs/common';
import { MemoryManagementService } from './memory-management.service';

@Module({
    providers: [MemoryManagementService],
    exports: [MemoryManagementService],
})
export class MemoryManagementModule { }