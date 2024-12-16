import { serializeSkillImprovement, deserializeSkillImprovement, SkillImprovement } from "../../../../class/SkillImprovement";
import { TaggableContentBase } from "../../../../class/TaggableContentBase";
import { Serializable } from "../../../../decorator/serializable.decorator";
import { FormField } from "../../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../../enum/FieldComponentEnum";
import { EntityDisplay } from "../../../../decorator/entity-display.decorator";
import { DisplayField } from "../../../../decorator/display-field.decorator";
import { FilterOption } from "../../../../decorator/filter-option.decorator";

@EntityDisplay({
    title: 'Skill Sets',
    defaultSort: 'name'
})
export class SkillSet extends TaggableContentBase {
    @DisplayField({ order: 1 })
    @FilterOption()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter skill set name', required: true })
    @Serializable()
    name!: string

    @DisplayField({ order: 2 })
    @FormField({ component: FieldComponentEnum.OBJECT_FIELD, label: 'Skill Improvement', required: true })
    @Serializable({ serialize: serializeSkillImprovement, deserialize: deserializeSkillImprovement })
    skillImprovement!: SkillImprovement

}
