import { ContentBase } from "../../class/ContentBase";
import { common } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { TagSubtypeEnum } from "../../enum/entityEnums";
import { ContentService } from "../../services/ContentService";
import { Context } from "../../class/Context";
import { SearchQuery } from "../../class/search/SearchQuery";
import { DisplayField } from '../../decorator/display-field.decorator';
import { EntityDisplay } from '../../decorator/entity-display.decorator';
import { FilterOption } from "../../decorator/filter-option.decorator";

@EntityDisplay({
    title: 'Tags',
    defaultSort: 'label'
})
export class Tag extends ContentBase {
    @DisplayField({
        order: 1,
        displayName: 'Label'
    })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Label', placeholder: 'Enter tag label', required: true })
    label!: string; // The tag's name (e.g., "dunmeri", "rare")

    @DisplayField({ order: 2 })
    @FilterOption()
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

    public toDTO(): common.TagDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: common.TagDTO): Tag {
        const tag = new Tag();
        return Serializer.fromDTO(dto, tag);
    }

    public static async search(filter: SearchQuery, context: Context): Promise<Tag[]> {
        const contentService = new ContentService<Tag>();
        const { results } = await contentService.searchContent('Tag', filter, context);
        return results as Tag[];
    }
}