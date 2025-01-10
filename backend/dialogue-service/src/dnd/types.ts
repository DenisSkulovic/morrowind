import { DICE_OUTCOME_ENUM } from "./enum/DICE_OUTCOME_ENUM";
import { SCALE_RISK_IMPACT_ENUM } from "./enum/SCALE_RISK_IMPACT_ENUM";

export type DiceScaleConfig = {
    sides: number;
    items: { [key in SCALE_RISK_IMPACT_ENUM]: DiceScaleConfigItem };
}

export type DiceScaleConfigItem = {
    [key in DICE_OUTCOME_ENUM]: string | null;
}