import { TaggableContentBase } from "../../class/TaggableContentBase";
import { CharacterProfessionDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../class/FormSelectOption";
import { MemoryPool } from "./MemoryPool";

export class CharacterProfession extends TaggableContentBase {
    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Memory Pools',
        search: async (filter): Promise<FormSelectOption[]> => {
            return (await MemoryPool.search(filter)).map((item: MemoryPool) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable()
    memoryPools!: string[]

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter profession name', required: true })
    @Serializable()
    name!: string; // E.g., "Fisherman", "Kwama Egg Miner", "Imperial Soldier"

    public toDTO(): CharacterProfessionDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: CharacterProfessionDTO): CharacterProfession {
        const chProfession = new CharacterProfession();
        return Serializer.fromDTO(dto, chProfession);
    }

    public static async search(filter?: any): Promise<CharacterProfession[]> {
        // perform request to backend using the filter
        // return array of options
        return []
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