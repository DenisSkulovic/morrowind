import { Serializable } from "../../../decorator/serializable.decorator";
import { SCALE_RISK_IMPACT_ENUM } from "../enum/SCALE_RISK_IMPACT_ENUM";
import { ScaleTypeEnum } from "../enum/ScaleTypeEnum";
import { DICE_OUTCOME_ENUM } from "../enum/DICE_OUTCOME_ENUM";

export class DiceRollResult {
    @Serializable()
    roll!: number;

    @Serializable() // no need for serializeEnum, just a string in proto (for simplicity)
    outcome?: DICE_OUTCOME_ENUM;

    @Serializable() // no need for serializeEnum, just a string in proto (for simplicity)
    scaleType?: SCALE_RISK_IMPACT_ENUM;

    @Serializable() // no need for serializeEnum, just a string in proto (for simplicity)
    usedScaleConfig?: ScaleTypeEnum;

    @Serializable()
    clazz!: string;

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