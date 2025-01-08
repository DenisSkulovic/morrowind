import { DialogueStepOutcomeEnum } from "../../../enum/DialogueStepOutcomeEnum";
import { DialogueAttitudeEnum } from "../../../enum/DialogueAttitudeEnum";

export class StepOutcome {
    characterChanges?: {
        [characterId: string]: {
            markUnfulfilledGoalsAsFulfilled?: string[]
            addUnfulfilledGoals?: string[]
            removeUnfulfilledGoals?: string[]
            changeDialogueAttitudeTo?: DialogueAttitudeEnum,
            addOrRemoveOrModifyItemInInventory?: {
                itemId: string,
                quantityDeltaChange: number,
            }
        }
    }
    dialogueOutcome!: DialogueStepOutcomeEnum
    clazz = 'StepOutcome';

    static validate(body: Partial<StepOutcome>): void {
        // validate types
        if (body.clazz !== 'StepOutcome') throw new Error("Invalid class");
        if (body.characterChanges && !Array.isArray(body.characterChanges)) throw new Error('characterChanges must be an array');
        if (body.dialogueOutcome && !Object.values(DialogueStepOutcomeEnum).includes(body.dialogueOutcome)) throw new Error('dialogueOutcome must be a valid DialogueStepOutcomeEnum value');
    }

    static build(body: Partial<StepOutcome>): StepOutcome {
        StepOutcome.validate(body);
        const outcome = new StepOutcome();
        outcome.characterChanges = body.characterChanges;
        outcome.dialogueOutcome = DialogueStepOutcomeEnum[body.dialogueOutcome!];
        return outcome;
    }
}