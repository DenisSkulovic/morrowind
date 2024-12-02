import { Module } from '@nestjs/common';
import { EquipmentSlotService } from './equipment-slot.service';

@Module({
    providers: [EquipmentSlotService],
    exports: [EquipmentSlotService],
})
export class EquipmentSlotModule { }
