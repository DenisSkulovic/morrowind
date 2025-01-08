import { DiceRollResult } from "../../../dnd/class/DiceRollResult";
import { DialogueOption } from "../../DialogueOption";

export class PlayerCharacterStep {
    characterId!: string;
    selectedDialogueOption!: DialogueOption;
    diceRollResult!: DiceRollResult;
    clazz = 'PlayerCharacterStep';

    static validate(body: Partial<PlayerCharacterStep>): void {
        if (body.clazz !== 'PlayerCharacterStep') throw new Error("Invalid class");
        if (!body.characterId) throw new Error("Character ID is required");
        if (!body.selectedDialogueOption) throw new Error("Selected dialogue option is required");
    }

    static build(body: Partial<PlayerCharacterStep>): PlayerCharacterStep {
        PlayerCharacterStep.validate(body);
        const playerCharacterStep = new PlayerCharacterStep();
        playerCharacterStep.characterId = body.characterId!;
        playerCharacterStep.selectedDialogueOption = DialogueOption.build(body.selectedDialogueOption!);
        playerCharacterStep.diceRollResult = DiceRollResult.build(body.diceRollResult!);
        return playerCharacterStep;
    }
}