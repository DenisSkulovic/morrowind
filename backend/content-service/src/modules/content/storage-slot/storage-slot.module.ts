import { Module } from '@nestjs/common';
import { StorageSlotService } from './storage-slot.service';

@Module({
    providers: [StorageSlotService],
    exports: [StorageSlotService],
})
export class StorageSlotModule { }
