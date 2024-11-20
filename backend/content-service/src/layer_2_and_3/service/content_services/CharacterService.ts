import { Repository } from "typeorm";
import { Character } from "../../../entities/Content/Character";
import { DataSourceEnum } from "../../../enum/DataSourceEnum";
import { CharacterGenInstruction } from "../../../types";
import { CharacterGenerator } from "../../generator/CharacterGenerator";
import { RepositoryServiceBase, RepositoryServiceSettings } from "../RepositoryServiceBase";

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

    public async generateCharacter(instruction: CharacterGenInstruction, source: DataSourceEnum): Promise<Character> {
        const characterGenerator = new CharacterGenerator()
        const character = await characterGenerator.generateCharacter(instruction)
        return await this.saveCharacter(character, source)
    }
}