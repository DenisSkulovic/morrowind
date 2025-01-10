import { Serializable } from "../../../../common/decorator/serializable.decorator";
import { SerializeStrategyEnum } from "../../../../common/serializer/serializer";
import { DialogueAttitudeEnum } from "../../../../enum/DialogueAttitudeEnum";
import { InventoryChange } from "./InventoryChange";

export class CharacterChange {
    @Serializable()
    characterId!: string;

    @Serializable()
    markUnfulfilledGoalsAsFulfilled?: string[]

    @Serializable()
    addUnfulfilledGoals?: string[]

    @Serializable()
    removeUnfulfilledGoals?: string[]

    @Serializable() // no need for serializeEnum, in proto it's just a string (for simplicity)
    changeDialogueAttitudeTo?: DialogueAttitudeEnum

    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: InventoryChange })
    addOrRemoveOrModifyItemInInventory?: InventoryChange[]

    @Serializable()
    clazz = 'CharacterChange';

    static validate(body: Partial<CharacterChange>): void {
        if (body.clazz !== 'CharacterChange') throw new Error("Invalid class");
        if (body.changeDialogueAttitudeTo && !Object.values(DialogueAttitudeEnum).includes(body.changeDialogueAttitudeTo)) throw new Error('changeDialogueAttitudeTo must be a valid DialogueAttitudeEnum value');
    }

    static build(body: Partial<CharacterChange>): CharacterChange {
        CharacterChange.validate(body);
        const characterChanges = new CharacterChange();
        characterChanges.markUnfulfilledGoalsAsFulfilled = body.markUnfulfilledGoalsAsFulfilled;
        characterChanges.addUnfulfilledGoals = body.addUnfulfilledGoals;
        characterChanges.removeUnfulfilledGoals = body.removeUnfulfilledGoals;
        characterChanges.changeDialogueAttitudeTo = body.changeDialogueAttitudeTo;
        characterChanges.addOrRemoveOrModifyItemInInventory = body.addOrRemoveOrModifyItemInInventory?.map(inventoryChange => InventoryChange.build(inventoryChange));
        return characterChanges;
    }
}