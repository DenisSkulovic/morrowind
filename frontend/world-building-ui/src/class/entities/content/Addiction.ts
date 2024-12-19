import { ContentBase } from "../../../class/ContentBase";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { EntityDisplay } from "../../../decorator/entity-display.decorator";
import { FilterOption } from "../../../decorator/filter-option.decorator";
import { DisplayField } from "../../../decorator/display-field.decorator";

@EntityDisplay({
    title: 'Addictions',
    defaultSort: 'name'
})
export class Addiction extends ContentBase {
    @DisplayField({
        order: 1
    })
    @FilterOption()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter addiction name', required: true })
    @Serializable()
    name!: string

}