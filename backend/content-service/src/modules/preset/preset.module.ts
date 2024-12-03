import { Module } from '@nestjs/common';
import { PresetService } from './preset.service';

@Module({
    providers: [
        {
            provide: 'IPresetService',
            useClass: PresetService,
        },
        PresetService,
    ],
    exports: ['IPresetService', PresetService],
})
export class PresetModule { }