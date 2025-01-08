import { DICE_OUTCOME_ENUM } from "./enum/DICE_OUTCOME_ENUM";
import { SCALE_TYPE_ENUM } from "./enum/SCALE_TYPE_ENUM";

export type DiceScaleConfig = {
    sides: number;
    items: { [key in SCALE_TYPE_ENUM]: DiceScaleConfigItem };
}

export type DiceScaleConfigItem = {
    [key in DICE_OUTCOME_ENUM]: string | null;
}