import { TaggableContentBase } from "../../class/TaggableContentBase";
import { common } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../class/FormSelectOption";
import { MemoryPool } from "./MemoryPool";
import { DisplayField } from "../../decorator/display-field.decorator";
import { EntityDisplay } from "../../decorator/entity-display.decorator";
import { FilterOption } from "../../decorator/filter-option.decorator";
import { SearchQuery } from "../../class/search/SearchQuery";
import { Context } from "../../class/Context";
import { ContentService } from "../../services/ContentService";

@EntityDisplay({
    title: 'Character Professions',
    defaultSort: 'name'
})
export class CharacterProfession extends TaggableContentBase {
    @DisplayField({ order: 1 })
    @FilterOption()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter profession name', required: true })
    @Serializable()
    name!: string; // E.g., "Fisherman", "Kwama Egg Miner", "Imperial Soldier"

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Memory Pools',
        search: async (filter, context): Promise<FormSelectOption[]> => {
            return (await MemoryPool.search(filter, context)).map((item: MemoryPool) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable()
    memoryPools!: string[]

    public toDTO(): common.CharacterProfessionDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: common.CharacterProfessionDTO): CharacterProfession {
        const chProfession = new CharacterProfession();
        return Serializer.fromDTO(dto, chProfession);
    }

    public static async search(filter: SearchQuery, context: Context): Promise<CharacterProfession[]> {
        const contentService = new ContentService<CharacterProfession>();
        const { results } = await contentService.searchContent('CharacterProfession', filter, context);
        return results as CharacterProfession[];
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