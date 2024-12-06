import { ContentBase } from "../../class/ContentBase";
import { TagDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { TagSubtypeEnum } from "../../enum/entityEnums";

export class Tag extends ContentBase {
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Label', placeholder: 'Enter tag label', required: true })
    label!: string; // The tag's name (e.g., "dunmeri", "rare")

    @Serializable()
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Subtype',
        search: async () => {
            return Object.values(TagSubtypeEnum).map(value => {
                return { id: value, label: value }
            })
        },
        required: true
    })
    subtype!: TagSubtypeEnum;

    public toDTO(): TagDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: TagDTO): Tag {
        const tag = new Tag();
        return Serializer.fromDTO(dto, tag);
    }

    public static async search(filter?: any): Promise<Tag[]> {
        // perform request to backend using the filter
        // return array of options
        return []
    }
}