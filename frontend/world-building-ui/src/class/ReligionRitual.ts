import { FormField } from "../decorator/form-field.decorator";
import { FieldComponentEnum } from "../enum/FieldComponentEnum";
import { Serializable } from "../decorator/serializable.decorator";
import { DisplayField } from "../decorator/display-field.decorator";
import { EntityDisplay } from "../decorator/entity-display.decorator";
import { FilterOption } from "../decorator/filter-option.decorator";

@EntityDisplay({
    title: 'Religion Rituals',
    defaultSort: 'name'
})
export class ReligionRitual {
    clazz = "ReligionRitual"

    @DisplayField({
        displayName: 'Name'
    })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter ritual name', required: true })
    name!: string;

    @DisplayField({
        displayName: 'Description'
    })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Description', placeholder: 'Enter ritual description', required: true })
    description!: string;

}