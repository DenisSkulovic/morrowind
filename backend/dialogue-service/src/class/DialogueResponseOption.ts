import { D20_SCALE_TYPE_ENUM } from "../dnd/enum/D20_SCALE_TYPE_ENUM";
import { DialogueActionEnum } from "../enum/DialogueActionEnum";

export class DialogueResponseOption {
    text!: string;
    topic!: string;
    riskImpact!: D20_SCALE_TYPE_ENUM;
    actionToTrigger?: DialogueActionEnum;

    static validate(body: Partial<DialogueResponseOption>): void {
        if (!body.text) throw new Error("Text is required");
        if (!body.topic) throw new Error("Topic is required");
        if (!body.riskImpact) throw new Error("Risk impact is required");
        if (!Object.values(D20_SCALE_TYPE_ENUM).includes(body.riskImpact)) throw new Error("Invalid risk impact");
    }

    static build(body: Partial<DialogueResponseOption>): DialogueResponseOption {
        DialogueResponseOption.validate(body);
        const responseOption = new DialogueResponseOption();
        Object.assign(responseOption, body);
        return responseOption;
    }
}