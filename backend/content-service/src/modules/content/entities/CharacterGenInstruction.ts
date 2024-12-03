import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { CharacterGenInstructionDTO, GenderEnumDTO } from "../../../proto/common";
import { GenderEnum } from "../../../common/enum/GenderEnum";
import { serializeEnum, deserializeEnum } from "../../../common/enum/util";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { BackgroundCustomization, deserializeBackgroundCustomization, serializeBackgroundCustomization } from "../../../class/BackgroundCustomization";
import { Serializer } from "../../../serializer";



@Entity()
export class CharacterGenInstruction extends ContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    idPrefix = "CHARACTER_GEN_INSTRUCTION"


    @Column({ nullable: true })
    @Serializable()
    firstName?: string

    @Column({ nullable: true })
    @Serializable()
    lastName?: string

    @Column({ nullable: true, type: "enum", enum: Object.values(GenderEnum) })
    @Serializable({
        serialize: (i: GenderEnum) => serializeEnum(GenderEnum, GenderEnumDTO, i),
        deserialize: (i: GenderEnumDTO | undefined) => typeof i !== "undefined" ? deserializeEnum(GenderEnumDTO, GenderEnum, i) : null
    })
    gender?: GenderEnum

    @Column({ nullable: true })
    @Serializable()
    birthsign?: string

    @Column({ nullable: true })
    @Serializable()
    birthEra?: string

    @Column({ nullable: true })
    @Serializable()
    birthYear?: number

    @Column({ nullable: true })
    @Serializable()
    birthMonth?: string

    @Column({ nullable: true })
    @Serializable()
    birthDay?: number

    @Column()
    @Serializable()
    backgroundBlueprintId!: string

    @Column("jsonb", { nullable: true })
    @Serializable({
        serialize: serializeBackgroundCustomization,
        deserialize: i => i ? deserializeBackgroundCustomization(i) : null
    })
    backgroundCustomization?: BackgroundCustomization

    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: 'id' })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: 'id' })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: 'id' })
    world!: World;

    public toDTO(): CharacterGenInstructionDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: CharacterGenInstructionDTO): CharacterGenInstruction {
        const chGenInst = new CharacterGenInstruction();
        return Serializer.fromDTO(dto, chGenInst);
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