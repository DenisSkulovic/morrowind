import { TaggableContentBase } from "../../../../class/TaggableContentBase";
import { Serializable } from "../../../../decorator/serializable.decorator";
import { FormField } from "../../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../../enum/FieldComponentEnum";
import { SkillCategoryEnum } from "../../../../enum/entityEnums";
import { deserializeEnum } from "../../../../enum/util";
import { serializeEnum } from "../../../../enum/util";
import { FormSelectOption } from "../../../../class/FormSelectOption";
import { DisplayField } from "../../../../decorator/display-field.decorator";
import { EntityDisplay } from "../../../../decorator/entity-display.decorator";
import { FilterOption } from "../../../../decorator/filter-option.decorator";
import { ContentService } from "../../../../services/ContentService";
import { SearchQuery } from "../../../../class/search/SearchQuery";
import { Context } from "../../../../class/Context";
import { SkillCategoryEnumDTO } from "../../../../proto/common_pb";

@EntityDisplay({
    title: 'Skills',
    defaultSort: 'name'
})
export class Skill extends TaggableContentBase {
    @DisplayField({
        order: 1,
        displayName: 'Name'
    })
    @FilterOption()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter skill name', required: true })
    @Serializable()
    name!: string

    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter skill description', required: true })
    @Serializable()
    description!: string

    @DisplayField({
        order: 2,
        displayName: 'Category'
    })
    @FilterOption()
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Category',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(SkillCategoryEnum).map((value) => {
                return { id: value, label: value }
            })
        },
        required: true
    })
    @Serializable({
        serialize: category => serializeEnum(SkillCategoryEnum, SkillCategoryEnumDTO, category),
        deserialize: category => deserializeEnum(SkillCategoryEnumDTO, SkillCategoryEnum, category)
    })
    category!: SkillCategoryEnum

    public static async search(filter: SearchQuery, context: Context): Promise<Skill[]> {
        const contentService = new ContentService<Skill>();
        const { results } = await contentService.searchContent('Skill', filter, context);
        return results as Skill[];
    }
}