import { Controller, Inject } from "@nestjs/common"
import { GrpcMethod } from "@nestjs/microservices"
import { DataSourceEnum } from "../../../common/enum/DataSourceEnum"
import { deserializeEnum } from "../../../common/enum/util"
import { DataSourceEnumDTO, CharacterGenInstructionDTO, ContextDTO } from "../../../proto/entities"
import { GenerateItemsRequest, GenerateItemsResponse, GenerateCharactersRequestCustom, GenerateCharactersResponse, GenerateCharactersRequestDB, GenerateCharacterGroupsRequest, GenerateCharacterGroupsResponse } from "../../../proto/generator"
import { Character } from "../entities/Character"
import { CharacterGenInstruction } from "../entities/CharacterGenInstruction"
import { Item } from "../entities/Item/Item"
import { CacheKeyEnum, CharacterGeneratorService } from "./character/character-generator.service"
import { ItemGeneratorService } from "./item/item-generator.service"
import { GenerationInstruction, deserializeGenerationInstructions } from "../../../class/GenerationInstruction"
import { CampaignService } from "../../campaign/campaign.service"
import { UserService } from "../../user/user.service"
import { WorldService } from "../../world/world.service"
import { Context } from "../../../class/Context"

@Controller()
export class GeneratorController {
    constructor(
        @Inject('ICharacterGeneratorService') private characterGeneratorService: CharacterGeneratorService,
        @Inject('IItemGeneratorService') private itemGeneratorService: ItemGeneratorService,
        @Inject('IUserService') private userService: UserService,
        @Inject('IWorldService') private worldService: WorldService,
        @Inject('ICampaignService') private campaignService: CampaignService,
    ) { }

    async processContextDTO(contextDTO: ContextDTO, source: DataSourceEnum): Promise<Context> {
        const [user, world, campaign] = await Promise.all([
            this.userService.findUser(contextDTO.user, source),
            this.worldService.findWorld(contextDTO.world, contextDTO.user, source),
            this.campaignService.findCampaign(contextDTO.campaign, contextDTO.user, source),
        ])
        if (!user) throw new Error("User not found")
        if (!world) throw new Error("World not found")
        return Context.build({ user, world, campaign: campaign || undefined })
    }

    @GrpcMethod('GeneratorService', 'generateItems')
    public async generateItems(
        request: GenerateItemsRequest,
    ): Promise<GenerateItemsResponse> {
        console.log(`[GeneratorController - generateItems] request`, request)

        const instructions: GenerationInstruction[] = deserializeGenerationInstructions(request)
        console.log(`[GeneratorController - generateItems] received instructions length`, instructions.length)

        const source: DataSourceEnum = deserializeEnum(DataSourceEnumDTO, DataSourceEnum, request.source)

        const contextDTO: ContextDTO | undefined = request.context
        const context: Context | undefined = contextDTO ? await this.processContextDTO(contextDTO, source) : undefined

        const generatedItems: Item[] = await this.itemGeneratorService.generateMany(instructions, source, context)
        console.log(`[GeneratorController - generateItems] generatedItems length`, generatedItems.length)

        return { arr: generatedItems.map(item => item.toDTO()) }
    };

    @GrpcMethod('GeneratorService', 'generateCharactersCustom')
    public async generateCharactersCustom(
        request: GenerateCharactersRequestCustom,
    ): Promise<GenerateCharactersResponse> {
        console.log(`[GeneratorController - generateCharacters] request`, request)


        const arr: CharacterGenInstructionDTO[] = request.arr
        const instructions: CharacterGenInstruction[] = arr.map((chGenInstr) => CharacterGenInstruction.fromDTO(chGenInstr))
        console.log(`[GeneratorController - generateCharacters] received instructions length`, instructions.length)

        const source: DataSourceEnum = deserializeEnum(DataSourceEnumDTO, DataSourceEnum, request.source)
        const contextDTO: ContextDTO | undefined = request.context
        const context: Context | undefined = contextDTO ? await this.processContextDTO(contextDTO, source) : undefined
        console.log(`@@@context`, context)

        // set the custom instructions into the cache, so that when the code checks the id, the instruction will be retrieved from the cache
        const ids: string[] = []
        for (const instruction of instructions) {
            ids.push(instruction.blueprintId)
            await this.characterGeneratorService.cacheBlueprint(CacheKeyEnum.CHARACTER_INSTRUCTION, instruction.blueprintId, instruction)
        }
        console.log(`[GeneratorController - generateCharacters] ids`, ids)

        const characters: Character[] = await this.characterGeneratorService.generateMany(ids, source, context)
        const response = { arr: characters.map((char) => char.toDTO()) }
        console.log(`[GeneratorController - generateCharacters] finish`)
        return response
    };

    @GrpcMethod('GeneratorService', 'generateCharactersDB')
    public async generateCharactersDB(
        request: GenerateCharactersRequestDB,
    ): Promise<GenerateCharactersResponse> {
        console.log(`[GeneratorController - generateCharactersDB] request`, request)
        const ids: string[] = request.charGenInstructionIds
        console.log(`[GeneratorController - generateCharactersDB] received ids`, ids)
        const source: DataSourceEnum = deserializeEnum(DataSourceEnumDTO, DataSourceEnum, request.source)
        const contextDTO: ContextDTO | undefined = request.context
        const context: Context | undefined = contextDTO ? await this.processContextDTO(contextDTO, source) : undefined
        const characters: Character[] = await this.characterGeneratorService.generateMany(ids, source, context)
        return { arr: characters.map((char) => char.toDTO()) }
    };

    @GrpcMethod('GeneratorService', 'generateCharacterGroups')
    public async generateCharacterGroups(
        request: GenerateCharacterGroupsRequest,
    ): Promise<GenerateCharacterGroupsResponse> {
        throw new Error("NOT IMPLEMENTED")
    };

}
