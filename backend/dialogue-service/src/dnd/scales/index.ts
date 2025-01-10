import { DiceScaleConfig } from '../types';
import { D20_V1 } from './D20_V1';
import { ScaleTypeEnum } from '../enum/ScaleTypeEnum';

export const SCALE_CONFIGS: Record<ScaleTypeEnum, DiceScaleConfig> = {
    [ScaleTypeEnum.D20_V1]: D20_V1
}