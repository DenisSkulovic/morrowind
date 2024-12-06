import { serializeBackgroundCustomization, deserializeBackgroundCustomization, BackgroundCustomization } from "../class/BackgroundCustomization";
import { ContentBase } from "../class/ContentBase";
import { GenderEnum } from "../enum/GenderEnum";
import { serializeEnum, deserializeEnum } from "../enum/util";
import { GenderEnumDTO, CharacterGenInstructionDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";

export class CharacterGenInstruction extends ContentBase {
    @Serializable()
    firstName?: string

    @Serializable()
    lastName?: string

    @Serializable({
        serialize: (i: GenderEnum) => serializeEnum(GenderEnum, GenderEnumDTO, i),
        deserialize: (i: GenderEnumDTO | undefined) => typeof i !== "undefined" ? deserializeEnum(GenderEnumDTO, GenderEnum, i) : null
    })
    gender?: GenderEnum

    @Serializable()
    birthsign?: string

    @Serializable()
    birthEra?: string

    @Serializable()
    birthYear?: number

    @Serializable()
    birthMonth?: string

    @Serializable()
    birthDay?: number

    @Serializable()
    backgroundBlueprintId!: string

    @Serializable({
        serialize: serializeBackgroundCustomization,
        deserialize: i => i ? deserializeBackgroundCustomization(i) : null
    })
    backgroundCustomization?: BackgroundCustomization

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