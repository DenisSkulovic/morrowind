import { Module } from '@nestjs/common';
import { StorageSlotService } from './storage-slot.service';

@Module({
    providers: [
        {
            provide: 'IStorageSlotService',
            useClass: StorageSlotService,
        },
        StorageSlotService,
    ],
    exports: ['IStorageSlotService', StorageSlotService],
})
export class StorageSlotModule { }
