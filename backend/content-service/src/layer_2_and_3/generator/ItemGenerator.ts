



import { BlueprintGenInstruction_Gaussian, BlueprintSetCombinator, IdAndQuant } from "../../class/blueprint_id_and_prob";
import { Item } from "../../entities/Content/Item/Item";
import { StorageSlot } from "../../entities/Content/Slot/StorageSlot";
import { InstructionProcessor } from "../service/InstructionProcessor";
import { AbstractProbGenerator } from "./AbstractProbGenerator";
import { cloneDeep } from "lodash";

enum CacheKeyEnum {
    ITEM = "item",
}

export class ItemGenerator extends AbstractProbGenerator<Item> {

    public async _generateOne(idAndQuant: IdAndQuant): Promise<Item[]> {
        const instances: Item[] = []

        const quantity: number = idAndQuant.quantity || 1

        const cacheExtract: (Item | null)[] = await this._getBlueprints_cacheOrRequest(CacheKeyEnum.ITEM, Item, [idAndQuant.blueprint_id])
        const extractedBlueprint: Item | null = cacheExtract[0]
        if (!extractedBlueprint) throw new Error(`could not find Item blueprint for id: "${idAndQuant.blueprint_id}"`)

        // create clone for safety
        const blueprint: Item = cloneDeep(extractedBlueprint)
        const maxQuantity: number = blueprint.maxQuantity
        const isStackable: boolean = blueprint.stackable

        // make sure TypeORM creates a new entry
        delete blueprint.id

        // create one or many instances with identical params to blueprint
        if (isStackable) {
            // deal with quantity, maxQuantity and stackables. For example generating 1000 arrows, when maxQuantity per stack is 20. We need many stacks as a result.
            // generate full stacks, if any
            const full_stacks: number = Math.floor(quantity / maxQuantity)
            for (let i = 0; i < full_stacks; i++) {
                instances.push(Item.create({ ...blueprint, quantity: blueprint.maxQuantity }))
            }

            // generate last stack, if any (maybe all arrows nicely fit into full stacks, you know?)
            const lastStackQuantity: number = quantity - (full_stacks * maxQuantity)
            if (lastStackQuantity) {
                instances.push(Item.create({ ...blueprint, quantity: lastStackQuantity }))
            }
        } else { // if not stackable - create separate instances
            for (let i = 0; i < quantity; i++) {
                const instance: Item = Item.create({ ...blueprint })
                // FYI: I made a simple assumption that a stackable item cannot have storage slots... So it somewhat simplifies things
                if (blueprint.storageSlots) {
                    const storageSlots: StorageSlot[] = []
                    for (const storageSlotDefition of blueprint.storageSlots) {
                        const storageSlot = StorageSlot.create({ ...storageSlotDefition })
                        storageSlots.push(storageSlot)
                    }
                    instance.storageSlots = storageSlots
                }
                instances.push(instance)
            }
        }

        // TODO assign storage slots, if any
        
        return instances
    }

}
