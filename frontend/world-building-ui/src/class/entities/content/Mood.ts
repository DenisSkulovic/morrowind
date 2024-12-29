import { ContentBase } from "../../../class/ContentBase";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { DisplayField } from '../../../decorator/display-field.decorator';
import { EntityDisplay } from '../../../decorator/entity-display.decorator';
import { FilterOption, FilterOptionTypeEnum } from '../../../decorator/filter-option.decorator';

@EntityDisplay({
    title: 'Moods',
    defaultSort: 'name'
})
export class Mood extends ContentBase {
    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter mood name', required: true })
    name!: string;

    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter mood description', required: true })
    description!: string;

}
