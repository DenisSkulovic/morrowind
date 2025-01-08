import { DiceRollResult } from "../../../dnd/class/DiceRollResult";
import { DialogueOption } from "../../DialogueOption";

export class AiCharacterStep {
    characterId!: string;
    selectedDialogueOption!: DialogueOption;
    diceRollResult!: DiceRollResult;
    clazz = 'AiCharacterStep';

    static validate(body: Partial<AiCharacterStep>): void {
        if (body.clazz !== 'AiCharacterStep') throw new Error("Invalid class");
        if (!body.characterId) throw new Error("Character ID is required");
        if (!body.selectedDialogueOption) throw new Error("Selected dialogue option is required");
    }

    static build(body: Partial<AiCharacterStep>): AiCharacterStep {
        AiCharacterStep.validate(body);
        const aiCharacterStep = new AiCharacterStep();
        aiCharacterStep.characterId = body.characterId!;
        aiCharacterStep.selectedDialogueOption = DialogueOption.build(body.selectedDialogueOption!);
        aiCharacterStep.diceRollResult = DiceRollResult.build(body.diceRollResult!);
        return aiCharacterStep;
    }
}