import { Serializable } from "../../../../common/decorator/serializable.decorator";
import { SerializeStrategyEnum } from "../../../../common/serializer/serializer";
import { DialogueStepOutcomeEnum } from "../../../../enum/DialogueStepOutcomeEnum";
import { CharacterChange } from "./CharacterChange";

export class StepOutcome {
    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: CharacterChange })
    characterChanges?: CharacterChange[]

    @Serializable()
    newTopicName?: string;

    @Serializable()
    stepOutcome!: DialogueStepOutcomeEnum

    @Serializable()
    clazz = 'StepOutcome';

    static validate(body: Partial<StepOutcome>): void {
        // validate types
        if (body.clazz !== 'StepOutcome') throw new Error("Invalid class");
        if (body.characterChanges && !Array.isArray(body.characterChanges)) throw new Error('characterChanges must be an array');
        if (body.stepOutcome && !Object.values(DialogueStepOutcomeEnum).includes(body.stepOutcome)) throw new Error('stepOutcome must be a valid DialogueStepOutcomeEnum value');
        if (body.newTopicName && typeof body.newTopicName !== 'string') throw new Error('newTopicName must be a string');
    }

    static build(body: Partial<StepOutcome>): StepOutcome {
        StepOutcome.validate(body);
        const outcome = new StepOutcome();
        outcome.characterChanges = body.characterChanges?.map(characterChanges => CharacterChange.build(characterChanges));
        outcome.stepOutcome = DialogueStepOutcomeEnum[body.stepOutcome!];
        outcome.newTopicName = body.newTopicName;
        return outcome;
    }
}