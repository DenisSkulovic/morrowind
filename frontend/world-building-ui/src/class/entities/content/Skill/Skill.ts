import { TaggableContentBase } from "../../../../class/TaggableContentBase";
import { Serializable } from "../../../../decorator/serializable.decorator";
import { FormField } from "../../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../../enum/FieldComponentEnum";
import { SkillCategoryEnum } from "../../../../enum/entityEnums";
import { FormSelectOption } from "../../../../class/FormSelectOption";
import { DisplayField } from "../../../../decorator/display-field.decorator";
import { EntityDisplay } from "../../../../decorator/entity-display.decorator";
import { FilterOption, FilterOptionTypeEnum } from "../../../../decorator/filter-option.decorator";
import { SkillCategoryEnumDTO } from "../../../../proto/common_pb";
import { SerializeStrategyEnum } from "../../../../serialize/serializer";

@EntityDisplay({
    title: 'Skills',
    defaultSort: 'name'
})
export class Skill extends TaggableContentBase {
    @DisplayField({
        displayName: 'Name'
    })
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter skill name', required: true })
    @Serializable()
    name!: string

    @DisplayField({
        displayName: 'Description'
    })
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter skill description', required: true })
    @Serializable()
    description!: string

    @DisplayField({
        displayName: 'Category'
    })
    @FilterOption({ type: FilterOptionTypeEnum.SELECT, enum: SkillCategoryEnum })
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
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: SkillCategoryEnum, protoEnum: SkillCategoryEnumDTO })
    category!: SkillCategoryEnum

}