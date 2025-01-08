import { DICE_OUTCOME_ENUM } from "../enum/DICE_OUTCOME_ENUM";
import { SCALE_TYPE_ENUM } from "../enum/SCALE_TYPE_ENUM";
import { DiceScaleConfig } from "../types";

export class DiceRollResult {
    roll!: number;
    outcome?: DICE_OUTCOME_ENUM;
    scaleType?: SCALE_TYPE_ENUM;
    usedScaleConfig?: DiceScaleConfig;

    static validate(body: Partial<DiceRollResult>): void {
        if (!body.roll) throw new Error("Roll is required");
    }

    static build(body: Partial<DiceRollResult>): DiceRollResult {
        DiceRollResult.validate(body);
        const diceResult = new DiceRollResult();
        Object.assign(diceResult, body);
        return diceResult;
    }
}