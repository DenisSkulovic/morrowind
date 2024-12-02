import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { ContentBase } from "../../ContentBase";
import { BackgroundCustomization } from "./Background";
import { CharacterGenInstructionDTO, GenderEnumDTO } from "../../proto/common";
import { Context } from "../../types";
import { GenderEnum } from "../../enum/GenderEnum";
import { deserializeEnum, serializeEnum } from "../../enum/util";



@Entity()
export class CharacterGenInstruction extends ContentBase {
    @PrimaryColumn()
    id!: string;

    id_prefix = "CHARACTER_GEN_INSTRUCTION"


    @Column({ nullable: true })
    first_name?: string

    @Column({ nullable: true })
    last_name?: string

    @Column({ nullable: true, type: "enum", enum: GenderEnum })
    gender?: GenderEnum

    @Column({ nullable: true })
    birthsign?: string

    @Column({ nullable: true })
    birthEra?: string

    @Column({ nullable: true })
    birthYear?: number

    @Column({ nullable: true })
    birthMonth?: string

    @Column({ nullable: true })
    birthDay?: number

    @Column()
    background_blueprint_id!: string

    @Column("jsonb", { nullable: true })
    background_customization?: BackgroundCustomization

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;


    public static toDTO(charGen: CharacterGenInstruction): CharacterGenInstructionDTO {
        return {
            id: charGen.id,
            blueprintId: charGen.blueprint_id,
            firstName: charGen.first_name,
            lastName: charGen.last_name,
            gender: charGen.gender ? serializeEnum(GenderEnum, charGen.gender) : undefined,
            birthSign: charGen.birthsign,
            birthEra: charGen.birthEra,
            birthYear: charGen.birthYear,
            birthMonth: charGen.birthMonth,
            birthDay: charGen.birthDay,
            backgroundBlueprintId: charGen.background_blueprint_id,
            backgroundCustomization: charGen.background_customization && BackgroundCustomization.toDTO(charGen.background_customization),
            user: CharacterGenInstruction.serializeEntity(charGen.user, i => User.toDTO(i)),
            campaign: CharacterGenInstruction.serializeEntity(charGen.campaign, i => Campaign.toDTO(i)),
            world: CharacterGenInstruction.serializeEntity(charGen.world, i => World.toDTO(i)),
            targetEntity: charGen.targetEntity
        };
    }

    public static fromDTO(dto: CharacterGenInstructionDTO, context?: Context): CharacterGenInstruction {
        const instruction = new CharacterGenInstruction();
        instruction.id = dto.id;
        instruction.blueprint_id = dto.blueprintId;
        instruction.first_name = dto.firstName;
        instruction.last_name = dto.lastName;
        instruction.gender = dto.gender ? deserializeEnum(GenderEnumDTO, dto.gender) as GenderEnum : undefined;
        instruction.birthsign = dto.birthSign;
        instruction.birthEra = dto.birthEra;
        instruction.birthYear = dto.birthYear;
        instruction.birthMonth = dto.birthMonth;
        instruction.birthDay = dto.birthDay;
        instruction.background_blueprint_id = dto.backgroundBlueprintId;
        instruction.background_customization = dto.backgroundCustomization && BackgroundCustomization.fromDTO(dto.backgroundCustomization);
        if (context) {
            instruction.user = context.user;
            instruction.campaign = context.campaign;
            instruction.world = context.world;
        }
        instruction.targetEntity = dto.targetEntity
        return instruction;
    }
}

// example: Fisherman (Beginner). Beginner here would be represented by a tag, and specific memory pools will be connected. On generation, certain memories will be created, but after generation memories begin a free float.

// Fisherman (Beginner)
// Fisherman (Novice)
// Fisherman (Expert)
// Fisherman (Master)

// These would be 4 different professions with different memory pools.
// So lets say when a character changes profession from Fisherman (Beginner) to Fisherman (Novice), they gain access to a different memory pool set and dont immediately learn everything there, but instead start gaining the knowledge as ticks go by, simulating progress in mastery.
// And lets say a character gains a profession, Fisherman (Beginner). They start to slowly go from 0 knowledge to an equilibrium.
// And if its the player character, they would have to either gain direct experience, talk to someone, read a book, etc., to progress with the knowledge in the memory pools.
// Progressing to the next step happens when required memories become very ingrained and resistant. That shows a level of mastery and ability to progress to next mastery level in the profession.
// Profession means both knowledge and skills?...