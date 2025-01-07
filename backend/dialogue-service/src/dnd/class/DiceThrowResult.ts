import { D20_OUTCOME_ENUM } from "../enum/D20_OUTCOME_ENUM";
import { D20_SCALE_TYPE_ENUM } from "../enum/D20_SCALE_TYPE_ENUM";

export class DiceThrowResult {
    roll!: number;
    outcome?: D20_OUTCOME_ENUM;
    scaleType?: D20_SCALE_TYPE_ENUM;

    static validate(body: Partial<DiceThrowResult>): void {
        if (!body.roll) throw new Error("Roll is required");
    }

    static build(body: Partial<DiceThrowResult>): DiceThrowResult {
        DiceThrowResult.validate(body);
        const diceResult = new DiceThrowResult();
        Object.assign(diceResult, body);
        return diceResult;
    }
}