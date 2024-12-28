import { TaggableContentBase } from "../../../class/TaggableContentBase";
import { DiseaseSeverityEnum } from "../../../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../../enum/util";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../../class/FormSelectOption";
import { DisplayField } from '../../../decorator/display-field.decorator';
import { EntityDisplay } from '../../../decorator/entity-display.decorator';
import { FilterOption } from '../../../decorator/filter-option.decorator';
import { DiseaseSeverityEnumDTO } from '../../../proto/common_pb';
import { SerializeStrategyEnum } from "../../../serialize/serializer";

@EntityDisplay({
    title: 'Diseases',
    defaultSort: 'name'
})
export class Disease extends TaggableContentBase {
    @DisplayField({
        displayName: 'Name'
    })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter disease name', required: true })
    name!: string;

    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter disease description', required: true })
    description!: string;

    @DisplayField({
        displayName: 'Severity'
    })
    @FilterOption()
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Severity',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(DiseaseSeverityEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: DiseaseSeverityEnum, protoEnum: DiseaseSeverityEnumDTO })
    severity!: DiseaseSeverityEnum;

}
