import { FormField } from "../decorator/form-field.decorator";
import { FieldComponentEnum } from "../enum/FieldComponentEnum";
import { FactStatusEnum } from "../enum/entityEnums";
import { deserializeEnum, serializeEnum } from "../enum/util";
import { FormSelectOption } from "./FormSelectOption";
import { Serializable } from "../decorator/serializable.decorator";
import { FactStatusEnumDTO } from "../proto/common_pb";
import { SerializeStrategyEnum } from "../serialize/serializer";

export class FactStatus {
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Fact ID', placeholder: 'Enter fact ID', required: true })
    factId!: string;

    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: FactStatusEnum, protoEnum: FactStatusEnumDTO })
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Status',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(FactStatusEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    status!: FactStatusEnum;

}