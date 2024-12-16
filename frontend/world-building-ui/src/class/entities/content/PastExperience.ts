import { TaggableContentBase } from "../../../class/TaggableContentBase";
import { PastExperienceTypeEnum } from "../../../enum/PastExperienceTypeEnum";
import { serializeEnum, deserializeEnum } from "../../../enum/util";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../../class/FormSelectOption";
import { DisplayField } from '../../../decorator/display-field.decorator';
import { EntityDisplay } from '../../../decorator/entity-display.decorator';
import { FilterOption } from '../../../decorator/filter-option.decorator';
import { PastExperienceTypeEnumDTO } from '../../../proto/common_pb';

@EntityDisplay({
    title: 'Past Experiences',
    defaultSort: 'name'
})
export class PastExperience extends TaggableContentBase {
    @DisplayField({ order: 1 })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter past experience name', required: true })
    name!: string;

    @DisplayField({ order: 2 })
    @FilterOption()
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Experience Type',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(PastExperienceTypeEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable({
        serialize: type => serializeEnum(PastExperienceTypeEnum, PastExperienceTypeEnumDTO, type),
        deserialize: type => deserializeEnum(PastExperienceTypeEnumDTO, PastExperienceTypeEnum, type)
    })
    expType!: PastExperienceTypeEnum

}