import { DialogueActionEnum } from "../enum/DialogueActionEnum";

export class AiResponseOutcome {
    public actionsTaken?: DialogueActionEnum[];
    public itemsTransferred?: {
        itemId: string,
        quantity: number,
        fromCharacterId: string,
        toCharacterId: string,
    }[];
    public aiUnfulfilledGoalsFulfilled?: string[];

    static validate(body: Partial<AiResponseOutcome>): void {
        // validate types
        if (body.actionsTaken && !Array.isArray(body.actionsTaken)) throw new Error('actionsTaken must be an array');
        if (body.itemsTransferred && !Array.isArray(body.itemsTransferred)) throw new Error('itemsTransferred must be an array');
        if (body.aiUnfulfilledGoalsFulfilled && !Array.isArray(body.aiUnfulfilledGoalsFulfilled)) throw new Error('aiUnfulfilledGoalsFulfilled must be an array');
    }

    static build(body: Partial<AiResponseOutcome>): AiResponseOutcome {
        AiResponseOutcome.validate(body);
        const outcome = new AiResponseOutcome();
        Object.assign(outcome, body);
        return outcome;
    }
}