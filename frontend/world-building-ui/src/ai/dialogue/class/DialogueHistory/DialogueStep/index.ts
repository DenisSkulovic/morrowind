import { Serializable } from "../../../../../decorator/serializable.decorator";
import { SerializeStrategyEnum } from "../../../../../serialize/serializer";
import { AiCharacterStep } from "./AiCharacterStep";
import { PlayerCharacterStep } from "./PlayerCharacterStep";
import { StepOutcome } from "./StepOutcome";

export class DialogueStep {
    @Serializable({ strategy: SerializeStrategyEnum.FULL })
    playerStep!: PlayerCharacterStep;

    @Serializable({ strategy: SerializeStrategyEnum.FULL })
    aiStep!: AiCharacterStep;

    @Serializable()
    narration!: string;

    @Serializable({ strategy: SerializeStrategyEnum.FULL })
    outcome!: StepOutcome;

    @Serializable()
    clazz = 'DialogueStep';

    static validate(body: Partial<DialogueStep>): void {
        if (body.clazz !== 'DialogueStep') throw new Error("Invalid class");
        if (!body.playerStep) throw new Error("DialogueStep: playerStep is required");
        if (!body.aiStep) throw new Error("DialogueStep: aiStep is required");
        if (!body.outcome) throw new Error("DialogueStep: outcome is required");
        if (!body.narration) throw new Error("DialogueStep: narration is required");
    }

    static build(body: Partial<DialogueStep>): DialogueStep {
        DialogueStep.validate(body);
        const dialogueStep = new DialogueStep();
        dialogueStep.playerStep = PlayerCharacterStep.build(body.playerStep!);
        dialogueStep.aiStep = AiCharacterStep.build(body.aiStep!);
        dialogueStep.outcome = StepOutcome.build(body.outcome!);
        dialogueStep.narration = body.narration!;
        return dialogueStep;
    }
}