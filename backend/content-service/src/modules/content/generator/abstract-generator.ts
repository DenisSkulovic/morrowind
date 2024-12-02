import { DataSource, FindOptionsWhere, Repository } from "typeorm";
import { Inject, Injectable } from "@nestjs/common";
import { ContentBase } from "../../../ContentBase";
import { InjectDataSource } from "@nestjs/typeorm";
import { DataSourceEnum } from "../../../common/enum/DataSourceEnum";
import { IdAndQuant, BlueprintGenInstruction_Gaussian, BlueprintSetCombinator, GenerationInstruction } from "../../../class/GenerationInstruction";
import { EntityConstructor } from "../../../types";
import { InstructionProcessorService } from "../instruction/instruction-processor.service";


export type BlueprintsCache = {
    [field: string]: {
        [key: string]: any
    }
}


export interface IAbstractProbGenerator<T extends ContentBase> {
    generateOne(
        instruction: string | IdAndQuant | BlueprintGenInstruction_Gaussian | BlueprintSetCombinator,
        source: DataSourceEnum,
    ): Promise<T[]>;
    generateMany(
        instructions: GenerationInstruction[],
        source: DataSourceEnum,
    ): Promise<T[]>
    cacheBlueprint<E extends ContentBase>(
        type: string,
        key: string,
        blueprint: E,
    ): Promise<void>
    getBlueprintFromCache<E extends ContentBase>(
        type: string,
        key: string
    ): Promise<E | undefined>
}


@Injectable()
export abstract class AbstractProbGenerator<T extends ContentBase> implements IAbstractProbGenerator<T> {
    dataSourceMap: Map<DataSourceEnum, DataSource>
    blueprintsCache: BlueprintsCache

    constructor(
        @InjectDataSource(DataSourceEnum.DATA_SOURCE_WORLD) protected readonly worldDataSource: DataSource,
        @InjectDataSource(DataSourceEnum.DATA_SOURCE_CAMPAIGN) protected readonly campaignDataSource: DataSource,
        @Inject('IInstructionProcessorService') protected instructionProcessorService: InstructionProcessorService,
    ) {
        this.blueprintsCache = {}
        this.dataSourceMap = new Map([
            [DataSourceEnum.DATA_SOURCE_WORLD, this.worldDataSource],
            [DataSourceEnum.DATA_SOURCE_CAMPAIGN, this.campaignDataSource],
        ])
    }

    // ###########################
    // ABSTRACT
    // ###########################

    // The implementation should use "_getBlueprints_cacheOrRequest" for db data handling,
    // or if the gen instruction is completely custom (not in db), then use "cacheBlueprint" before calling "generateOne"
    // Returns an array because of stackables. If I ask to generate 1000 arrows, it is still ONE, but it will be split into stacks as a result,
    // so still one blueprint, but potentially many separate instances. Same with generating 10 swords - 10 separate entities
    abstract _generateOne(idAndQuant: IdAndQuant, source: DataSourceEnum): Promise<T[]>;



    // ###########################
    // PUBLIC
    // ###########################


    public async generateOne(
        instruction: string | IdAndQuant | BlueprintGenInstruction_Gaussian | BlueprintSetCombinator,
        source: DataSourceEnum,
    ): Promise<T[]> {
        const idAndQuants: IdAndQuant[] = this.instructionProcessorService.processInstruction(instruction)
        const instances: T[] = []
        for (const idAndQuant of idAndQuants) {
            const items: T[] = await this._generateOne(idAndQuant, source)
            items.forEach((item) => instances.push(item))
        }
        return instances;
    }



    // I decided not to use batch size, because that largely negates my ability to use a data cache for common data.
    // For e.g. batch size 10 means that there may be dozens of identical requests for the same data, because it isnt cached yet. That is not acceptable.
    // If there is a lot of common data, generation of many will be speeding up as the cache will be utilized more and more.
    // The implementation of generateOne must (or is heavily advisable) use a data cache for the data it is requesting
    public async generateMany(
        instructions: GenerationInstruction[],
        source: DataSourceEnum,
    ): Promise<T[]> {
        console.log(`[AbstractProbGenerator - generateMany] instructions`, instructions)
        const res: T[] = []
        for (const instruction of instructions) {
            const idAndQuants: IdAndQuant[] = this.instructionProcessorService.processInstruction(instruction)
            console.log(`[AbstractProbGenerator - generateMany] idAndQuants`, idAndQuants)
            for (const idAndQuant of idAndQuants) {
                const items: T[] = await this.generateOne(idAndQuant, source)
                items.forEach((item) => res.push(item))
            }
        }
        return res
    }



    // Useful to generate random custom instructions on the fly,
    // when the character is not stored in the db but is a completely custom one.
    // This adds generation flexibility.
    // TODO use Redis
    public async cacheBlueprint<E extends ContentBase>(
        type: string,
        key: string,
        blueprint: E,
    ): Promise<void> {
        if (!this.blueprintsCache[type]) this.blueprintsCache[type] = {}
        this.blueprintsCache[type][key] = blueprint
    }

    // TODO use Redis
    public async getBlueprintFromCache<E extends ContentBase>(
        type: string,
        key: string
    ): Promise<E | undefined> {
        const typeCache: { [key: string]: any } | undefined = this.blueprintsCache[type]
        const cached: E | undefined = typeCache && typeCache[key]
        return cached
    }

    // ###########################
    // PROTECTED
    // ###########################


    protected async _getBlueprints_cacheOrRequest<E extends ContentBase>(
        type: string,
        entity: EntityConstructor<E>,
        blueprint_ids: string[],
        source: DataSourceEnum
    ): Promise<E[]> {
        const promises: Promise<E>[] = blueprint_ids.map(async (blueprint_id) => {
            // try to find background in the cache
            const cached = await this.getBlueprintFromCache<E>(type, blueprint_id)
            if (cached) return cached
            // try to extract background from db
            const dataSource: DataSource | undefined = this.dataSourceMap.get(source)
            if (!dataSource) throw new Error(`dataSource cannot be undefined; received source: "${source}`)
            const repo: Repository<E> = dataSource.getRepository(entity)
            const fetched: E | null = await repo.findOne({ where: { id: blueprint_id } as FindOptionsWhere<E> });
            if (!fetched) throw new Error(`failed to fetch blueprint: "${blueprint_id}" for entity type: "${type}"`)
            await this.cacheBlueprint<E>(type, blueprint_id, fetched)
            return fetched
        })
        const res = await Promise.all(promises)
        return res
    }

}
