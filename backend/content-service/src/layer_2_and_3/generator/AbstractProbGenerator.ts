import { randomUUID } from "crypto";
import { ContentBase } from "../../ContentBase";
import { DataSource, Repository } from "typeorm";
import { BlueprintSetInstruction, EntityConstructor, GenerationInstruction } from "../../types";
import { IdAndQuant, BlueprintGenInstruction_Gaussian, ProbObject_Simple, BlueprintSetCombinator } from "../../class/blueprint_id_and_prob";
import { InstructionProcessor } from "../service/InstructionProcessor";


export type BlueprintsCache = {
    [field: string]: {
        [key: string]: any
    }
}

export abstract class AbstractProbGenerator<T extends ContentBase> {

    blueprintsCache: BlueprintsCache
    dataSource: DataSource
    constructor(dataSource: DataSource) {
        this.dataSource = dataSource
        this.blueprintsCache = {}
    }

    // ###########################
    // ABSTRACT
    // ###########################

    // The implementation should use "_getBlueprints_cacheOrRequest" for db data handling,
    // or if the gen instruction is completely custom (not in db), then use "cacheBlueprint" before calling "generateOne"
    // Returns an array because of stackables. If I ask to generate 1000 arrows, it is still ONE, but it will be split into stacks as a result,
    // so still one blueprint, but potentially many separate instances. Same with generating 10 swords - 10 separate entities
    abstract _generateOne(idAndQuant: IdAndQuant): Promise<T[]>;



    // ###########################
    // PUBLIC
    // ###########################


    public async generateOne(instruction: string | IdAndQuant | BlueprintGenInstruction_Gaussian | BlueprintSetCombinator): Promise<T[]> {
        const idAndQuants: IdAndQuant[] = InstructionProcessor.processInstruction(instruction)
        const instances: T[] = []
        for (const idAndQuant of idAndQuants) {
            const items: T[] = await this._generateOne(idAndQuant)
            items.forEach((item) => instances.push(item))
        }
        return instances;
    }



    // I decided not to use batch size, because that largely negates my ability to use a data cache for common data.
    // For e.g. batch size 10 means that there may be dozens of identical requests for the same data, because it isnt cached yet. That is not acceptable.
    // If there is a lot of common data, generation of many will be speeding up as the cache will be utilized more and more.
    // The implementation of generateOne must (or is heavily advisable) use a data cache for the data it is requesting
    public async generateMany(instructions: GenerationInstruction[]): Promise<T[]> {
        const res: T[] = []
        for (const instruction of instructions) {
            const idAndQuants: IdAndQuant[] = InstructionProcessor.processInstruction(instruction)
            for (const idAndQuant of idAndQuants) {
                const items: T[] = await this.generateOne(idAndQuant)
                items.forEach((item) => res.push(item))
            }
        }
        return res
    }



    // Useful to generate random custom instructions on the fly,
    // when the character is not stored in the db but is a completely custom one.
    // This adds generation flexibility.
    public cacheBlueprint<E extends ContentBase>(
        type: string,
        key: string,
        blueprint: E,
    ): void {
        this.blueprintsCache[type][key] = blueprint
    }

    // ###########################
    // PROTECTED
    // ###########################


    protected async _getBlueprints_cacheOrRequest<E extends ContentBase>(
        type: string,
        entity: EntityConstructor<E>,
        blueprint_ids: string[],
    ): Promise<E[]> {
        const promises: Promise<E>[] = blueprint_ids.map(async (blueprint_id) => {
            // try to find background in the cache
            const cached = this.blueprintsCache[type][blueprint_id]
            if (cached) return cached
            // try to extract background from db
            const repo: Repository<E> = this.dataSource.getRepository(entity)
            const fetched: E | null = await repo.findOne({ where: { id: blueprint_id } });
            if (!fetched) throw new Error(`failed to fetch blueprint: "${blueprint_id}" for entity type: "${type}"`)
            this.cacheBlueprint(type, blueprint_id, fetched)
            return fetched
        })
        const res = await Promise.all(promises)
        return res
    }

}
