import { TaggableContentBase } from "../../../class/TaggableContentBase";
import { PastExperienceTypeEnum } from "../../../enum/PastExperienceTypeEnum";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../../class/FormSelectOption";
import { DisplayField } from '../../../decorator/display-field.decorator';
import { EntityDisplay } from '../../../decorator/entity-display.decorator';
import { FilterOption, FilterOptionTypeEnum } from '../../../decorator/filter-option.decorator';
import { PastExperienceTypeEnumDTO } from '../../../proto/common_pb';
import { SerializeStrategyEnum } from "../../../serialize/serializer";

@EntityDisplay({
    title: 'Past Experiences',
    defaultSort: 'name'
})
export class PastExperience extends TaggableContentBase {
    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter past experience name', required: true })
    name!: string;

    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.SELECT, enum: PastExperienceTypeEnum })
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Experience Type',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(PastExperienceTypeEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: PastExperienceTypeEnum, protoEnum: PastExperienceTypeEnumDTO })
    expType!: PastExperienceTypeEnum

}