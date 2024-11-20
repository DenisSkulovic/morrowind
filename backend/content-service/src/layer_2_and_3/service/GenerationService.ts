import { Repository } from "typeorm";
import { Character } from "../../entities/Content/Character";
import { DataSourceEnum } from "../../enum/DataSourceEnum";
import { CharacterGenInstruction } from "../../types";
import { CharacterGenerator } from "../generator/CharacterGenerator";
import { RepositoryServiceBase, RepositoryServiceSettings } from "./RepositoryServiceBase";

export class GenerationService extends RepositoryServiceBase {
    constructor(settings: RepositoryServiceSettings) {
        super(settings)
    }

    public async saveCharacter(character: Character, source: DataSourceEnum): Promise<Character> {
        const repository: Repository<Character> = this.getRepository("Character", source) as Repository<Character>
        return await repository.save(character);
    }

    public async generateAndSaveCharacter(instruction: CharacterGenInstruction, source: DataSourceEnum): Promise<Character> {
        const characterGenerator = new CharacterGenerator()
        const character = await characterGenerator.generateCharacter(instruction)
        return await this.saveCharacter(character, source)
    }
}