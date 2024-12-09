import { cloneDeep } from "lodash";
import { AbstractProbGenerator, IAbstractProbGenerator } from "../abstract-generator";
import { Item } from "../../entities/Item/Item";
import { StorageSlot } from "../../entities/Slot/StorageSlot";
import { Inject, Injectable, forwardRef } from "@nestjs/common";
import { DataSourceEnum } from "../../../../common/enum/DataSourceEnum";
import { IdAndQuant } from "../../../../class/GenerationInstruction";
import { InjectDataSource } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { InstructionProcessorService } from "../../instruction/instruction-processor.service";
import { Context } from "../../../../class/Context";
import { ContentService } from "../../content.service";

enum CacheKeyEnum {
    ITEM = "item",
}

export interface IItemGeneratorService extends IAbstractProbGenerator<Item> {

}


@Injectable()
export class ItemGeneratorService extends AbstractProbGenerator<Item> implements IItemGeneratorService {

    constructor(
        @InjectDataSource(DataSourceEnum.DATA_SOURCE_WORLD) protected readonly worldDataSource: DataSource,
        @InjectDataSource(DataSourceEnum.DATA_SOURCE_CAMPAIGN) protected readonly campaignDataSource: DataSource,
        @Inject(forwardRef(() => InstructionProcessorService)) protected instructionProcessorService: InstructionProcessorService,
        @Inject(forwardRef(() => ContentService)) protected contentService: ContentService<Item>,
    ) {
        super(worldDataSource, campaignDataSource, instructionProcessorService)
    }

    public async _generateOne(
        idAndQuant: IdAndQuant,
        source: DataSourceEnum,
        context: Context | undefined,
    ): Promise<Item[]> {
        const instances: Item[] = []

        const quantity: number = idAndQuant.quantity || 1
        console.log(`[ItemGenerator - _generateOne] quantity`, quantity)

        const cacheExtract: (Item | null)[] = await this._getBlueprints_cacheOrRequest(CacheKeyEnum.ITEM, Item, [idAndQuant.blueprintId], source, context)
        const extractedBlueprint: Item | null = cacheExtract[0]
        if (!extractedBlueprint) throw new Error(`could not find Item blueprint for id: "${idAndQuant.blueprintId}"`)

        // create clone for safety
        const blueprint: Item = cloneDeep(extractedBlueprint)
        const maxQuantity: number = blueprint.maxQuantity
        const isStackable: boolean = blueprint.stackable

        const itemRepository: Repository<Item> = this.contentService.getRepository(blueprint.targetEntity, source)

        // make sure TypeORM creates a new entry
        delete blueprint.id

        // create one or many instances with identical params to blueprint
        console.log(`[ItemGenerator - _generateOne] isStackable`, isStackable)
        if (isStackable) {
            // deal with quantity, maxQuantity and stackables. For example generating 1000 arrows, when maxQuantity per stack is 20. We need many stacks as a result.
            // generate full stacks, if any
            const full_stacks: number = Math.floor(quantity / maxQuantity)
            console.log(`[ItemGenerator - _generateOne] full_stacks`, full_stacks)
            for (let i = 0; i < full_stacks; i++) {
                instances.push(itemRepository.create({ ...blueprint, quantity: blueprint.maxQuantity }))
            }

            // generate last stack, if any (maybe all arrows nicely fit into full stacks, you know?)
            const lastStackQuantity: number = quantity - (full_stacks * maxQuantity)
            console.log(`[ItemGenerator - _generateOne] lastStackQuantity`, lastStackQuantity)
            if (lastStackQuantity) {
                instances.push(itemRepository.create({ ...blueprint, quantity: lastStackQuantity }))
            }
        } else { // if not stackable - create separate instances
            for (let i = 0; i < quantity; i++) {
                const instance: Item = itemRepository.create({ ...blueprint })
                // FYI: I made a simple assumption that a stackable item cannot have storage slots... So it somewhat simplifies things
                // assigning storage slots
                if (blueprint.storageSlots) {
                    const storageSlots: StorageSlot[] = []
                    for (const storageSlotDefition of blueprint.storageSlots) {
                        const storageSlot = StorageSlot.create({ ...storageSlotDefition })
                        storageSlot.parentItem = instance
                        storageSlots.push(storageSlot)
                    }
                    instance.storageSlots = storageSlots
                }
                instances.push(instance)
            }
        }

        if (context) {
            instances.forEach((instance) => {
                if (context?.user) instance.user = context.user
                if (context?.world) instance.world = context.world
                if (context?.campaign) instance.campaign = context.campaign
            })
        }

        return instances
    }

}
