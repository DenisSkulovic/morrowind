import { Module } from '@nestjs/common';
import { MemoryManagementService } from './memory-management.service';

@Module({
    providers: [
        {
            provide: 'IMemoryManagementService',
            useClass: MemoryManagementService,
        },
        MemoryManagementService,
    ],
    exports: ['IMemoryManagementService', MemoryManagementService],
})
export class MemoryManagementModule { }