import { Module } from '@nestjs/common';
import { EquipmentSlotService } from './equipment-slot.service';

@Module({
    providers: [
        {
            provide: 'IEquipmentSlotService',
            useClass: EquipmentSlotService,
        },
        EquipmentSlotService,
    ],
    exports: ['IEquipmentSlotService', EquipmentSlotService],
})
export class EquipmentSlotModule { }
