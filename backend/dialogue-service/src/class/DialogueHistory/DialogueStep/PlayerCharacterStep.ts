import { Serializable } from "../../../common/decorator/serializable.decorator";
import { SerializeStrategyEnum } from "../../../common/serializer/serializer";
import { DiceRollResult } from "../../../dnd/class/DiceRollResult";
import { DialogueOption } from "../../DialogueOption";

export class PlayerCharacterStep {
    @Serializable()
    characterId!: string;

    @Serializable({ strategy: SerializeStrategyEnum.FULL })
    selectedDialogueOption!: DialogueOption;

    @Serializable({ strategy: SerializeStrategyEnum.FULL })
    diceRollResult!: DiceRollResult;

    @Serializable()
    clazz = 'PlayerCharacterStep';

    static validate(body: Partial<PlayerCharacterStep>): void {
        if (body.clazz !== 'PlayerCharacterStep') throw new Error("Invalid class");
        if (!body.characterId) throw new Error("Character ID is required");
        if (!body.selectedDialogueOption) throw new Error("Selected dialogue option is required");
        if (!body.diceRollResult) throw new Error("Dice roll result is required");
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