import { DialogueActionEnum } from "../enum/DialogueActionEnum";

export class DialogueAction {
    description!: string;
    targetCharacterIds?: string[];
    targetItemIds?: string[];
    targetLocationIds?: string[];
    actionType!: DialogueActionEnum;

    static validate(body: Partial<DialogueAction>): void {
        if (!body.description) throw new Error("Description is required");
        if (!body.actionType) throw new Error("Action type is required");
    }

    static build(body: Partial<DialogueAction>): DialogueAction {
        DialogueAction.validate(body);
        const action = new DialogueAction();
        Object.assign(action, body);
        return action;
    }
}