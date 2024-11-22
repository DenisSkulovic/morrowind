import { BlueprintGenInstruction_Gaussian, BlueprintGenInstruction_Simple, ProbObject_Simple } from "../../layer_1/types";
import { randomUUID } from "crypto";
import { ContentBase } from "../../ContentBase";
import { DataSource, Repository } from "typeorm";
import { EntityConstructor } from "../../types";

export type IdAndQuant = { blueprint_id: string, quantity?: number }

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
    abstract generateOne(idAndQuant: IdAndQuant): Promise<T>



    // ###########################
    // PUBLIC
    // ###########################

    // I decided not to use batch size, because that largely negates my ability to use a data cache for common data.
    // For e.g. batch size 10 means that there may be dozens of identical requests for the same data, because it isnt cached yet. That is not acceptable.
    // If there is a lot of common data, generation of many will be speeding up as the cache will be utilized more and more.
    // The implementation of generateOne must (or is heavily advisable) use a data cache for the data it is requesting
    public async generateMany(ids_and_quant: IdAndQuant[]): Promise<T[]> {
        const res: T[] = []
        for (const id_and_quant of ids_and_quant) {
            const quantity = id_and_quant.quantity || 1
            for (let i = 0; i < quantity; i++) {
                const item = await this.generateOne(id_and_quant)
                res.push(item)
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

    public async generateMany_probSimple(instructions: ProbObject_Simple[]) {
        const ids_and_quant = this._processProbSimple(instructions)
        const res = await this.generateMany(ids_and_quant)
        return res
    }
    public async generateMany_probGaussian(instructions: BlueprintGenInstruction_Gaussian[]) {
        const ids_and_quant = this._processProbGaussian(instructions)
        const res = await this.generateMany(ids_and_quant)
        return res
    }


    // ###########################
    // PROTECTED
    // ###########################

    protected _processProbSimple(
        instructions: ProbObject_Simple[],
    ): IdAndQuant[] {
        return instructions.map((instruction: ProbObject_Simple) => {
            const res: IdAndQuant[] = [];

            switch (instruction.cond) {
                case "OR": {
                    const blueprint_id: string | undefined = this._processProbOr(instruction.prob)
                    if (blueprint_id) res.push({ blueprint_id })
                    break;
                }
                case "AND": // not sure if there is any difference between AND and ANY, will keep both for now
                case "ANY": {
                    const blueprintIds: string[] = this._processProbAny(instruction.prob)
                    blueprintIds.forEach((blueprint_id) => {
                        res.push({ blueprint_id })
                    })
                    break;
                }
            }

            return res;
        }).flat()
    }

    protected _processProbOr(instruction: BlueprintGenInstruction_Simple): string | undefined {
        const totalProb = Object.values(instruction.prob).reduce((sum, prob) => sum + prob, 0);
        let randomValue = Math.random() * totalProb;

        for (const [key, prob] of Object.entries(instruction.prob)) {
            randomValue -= prob;
            if (randomValue <= 0) {
                return key
            };
        }
    }

    protected _processProbAny(instruction: BlueprintGenInstruction_Simple) {
        const resArr = []
        for (const [blueprintId, prob] of Object.entries(instruction.prob)) {
            if (Math.random() <= prob) {
                resArr.push(blueprintId)
            }
        }
        return resArr
    }

    protected _processProbGaussian(
        instructions: BlueprintGenInstruction_Gaussian[]
    ): IdAndQuant[] {
        return instructions.map((instruction) => {
            const avg = instruction.avg_quan || 1;
            const stDev = instruction.st_dev || 0;
            const skew = instruction.skew || 0;

            const randomValue = this._getSkewedRandom(stDev, skew);
            const quantity = Math.max(1, Math.round(avg + randomValue));
            return { blueprint_id: instruction.blueprint_id, quantity }
        })
    }

    protected _getSkewedRandom(stDev: number, skew: number): number {
        if (stDev === 0) return 0 // exit before any unnecessary computations
        const u = Math.random();
        const v = Math.random();
        const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        return z * stDev + skew;
    }

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
