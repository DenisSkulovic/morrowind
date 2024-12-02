import { Module } from '@nestjs/common';
import { PresetService } from './preset.service';

@Module({
    providers: [PresetService],
    exports: [PresetService],
})
export class PresetModule { }