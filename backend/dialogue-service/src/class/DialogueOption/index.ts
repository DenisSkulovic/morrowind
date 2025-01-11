import { DialogueDirectionEnum } from "../../enum/DialogueDirectionEnum";
import { Serializable } from "../../common/decorator/serializable.decorator";
import { SCALE_RISK_IMPACT_ENUM } from "../../dnd/enum/SCALE_RISK_IMPACT_ENUM";

export class DialogueOption {
    @Serializable()
    explanation!: string;

    @Serializable() // no need for serializeEnum, this is just a string in proto (for simplicity)
    dialogueDirection!: DialogueDirectionEnum;

    @Serializable() // no need for serializeEnum, this is just a string in proto (for simplicity)
    riskImpact!: SCALE_RISK_IMPACT_ENUM;

    @Serializable()
    clazz = 'DialogueOption';

    static validate(body: Partial<DialogueOption>): void {
        if (body.clazz !== 'DialogueOption') throw new Error("Invalid class");
        if (!body.explanation) throw new Error("Explanation is required");
        if (!body.dialogueDirection) throw new Error("Dialogue direction is required");
        if (!Object.values(DialogueDirectionEnum).includes(body.dialogueDirection)) throw new Error("Invalid dialogue direction");
        if (!body.riskImpact || !Object.values(SCALE_RISK_IMPACT_ENUM).includes(body.riskImpact)) throw new Error("Invalid risk impact");
    }

    static build(body: Partial<DialogueOption>): DialogueOption {
        DialogueOption.validate(body);
        const dialogueOption = new DialogueOption();
        dialogueOption.explanation = body.explanation!;
        dialogueOption.dialogueDirection = DialogueDirectionEnum[body.dialogueDirection!];
        dialogueOption.riskImpact = SCALE_RISK_IMPACT_ENUM[body.riskImpact!];
        return dialogueOption;
    }
}
