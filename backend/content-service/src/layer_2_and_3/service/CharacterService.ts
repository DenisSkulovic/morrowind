import { Repository } from "typeorm";
import { Character } from "../../entities/Content/Character";
import { DataSourceEnum } from "../../enum/DataSourceEnum";
import { CharacterGenerator } from "../generator/CharacterGenerator";
import { RepositoryServiceBase, RepositoryServiceSettings } from "./RepositoryServiceBase";
import { CharacterGenInstruction } from "../../entities/Content/CharacterGenInstruction";

export class CharacterService extends RepositoryServiceBase {
    constructor(settings: RepositoryServiceSettings) {
        super(settings)
    }

    protected _getCharacterRepo(source: DataSourceEnum): Repository<Character> {
        return this.getRepository("Character", source) as Repository<Character>
    }

    public async saveCharacter(character: Character, source: DataSourceEnum): Promise<Character> {
        const repository: Repository<Character> = this._getCharacterRepo(source)
        return await repository.save(character);
    }

    public async createCharacter(instruction_id: string, source: DataSourceEnum): Promise<Character>;
    public async createCharacter(instruction: CharacterGenInstruction, source: DataSourceEnum): Promise<Character>;
    public async createCharacter(arg1: string | CharacterGenInstruction, source: DataSourceEnum): Promise<Character> {
        const characterGenerator = new CharacterGenerator(context, dataSource)
        let character: Character
        if (typeof arg1 === "string") {
            character = await characterGenerator.generateOne({"blueprint_id": arg1, quantity: 1})
        }else {
            characterGenerator.cacheBlueprint("characterInstruction", arg1.id, arg1)
            character = await characterGenerator.generateOne({"blueprint_id": arg1.id, quantity: 1})
        }
        return await this.saveCharacter(character, source)
    }
}