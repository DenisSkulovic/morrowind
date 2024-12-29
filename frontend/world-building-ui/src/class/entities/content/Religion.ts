import { ContentBase } from "../../../class/ContentBase";
import { ReligionRitual } from "../../../class/ReligionRitual";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { DisplayField } from '../../../decorator/display-field.decorator';
import { EntityDisplay } from '../../../decorator/entity-display.decorator';
import { FilterOption, FilterOptionTypeEnum } from '../../../decorator/filter-option.decorator';
import { ReligionTenet } from '../../../class/ReligionTenet';
import { ReligionRitualDTO, ReligionRitualsDTO, ReligionTenetDTO, ReligionTenetsDTO } from "../../../proto/common_pb";
import { SerializeStrategyEnum } from "../../../serialize/serializer";

@EntityDisplay({
    title: 'Religions',
    defaultSort: 'name'
})
export class Religion extends ContentBase {
    @DisplayField({
        displayName: 'Name'
    })
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter religion name', required: true })
    name!: string;

    @DisplayField({
        displayName: 'Description'
    })
    @Serializable()
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter religion description', required: true })
    description!: string;

    @Serializable({ strategy: SerializeStrategyEnum.FULL, internalClass: ReligionRitual, dtoClass: ReligionRitualDTO, dtoArrClass: ReligionRitualsDTO })
    @FormField({ component: FieldComponentEnum.NESTED_FORM, label: 'Rituals' })
    rituals?: ReligionRitual[];

    @Serializable({ strategy: SerializeStrategyEnum.FULL, internalClass: ReligionTenet, dtoClass: ReligionTenetDTO, dtoArrClass: ReligionTenetsDTO })
    @FormField({ component: FieldComponentEnum.NESTED_FORM, label: 'Tenets' })
    tenets?: ReligionTenet[];

}