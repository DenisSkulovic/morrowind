import { ContentBase } from "../../../class/ContentBase";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../../class/FormSelectOption";
import { MemoryPool } from "./MemoryPool";
import { DisplayField } from '../../../decorator/display-field.decorator';
import { EntityDisplay } from '../../../decorator/entity-display.decorator';
import { FilterOption, FilterOptionTypeEnum } from '../../../decorator/filter-option.decorator';
import { MemoryDTO } from "../../../proto/common_pb";
import { Memory } from "./Memory";
import { SerializeStrategyEnum } from "../../../serialize/serializer";

@EntityDisplay({
    title: 'Memory Pool Entries',
    defaultSort: 'name'
})
export class MemoryPoolEntry extends ContentBase {
    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter memory pool entry name', required: true })
    name!: string;

    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Memory Pool',
        search: async (filter, context): Promise<FormSelectOption[]> => {
            return (await MemoryPool.search<MemoryPool>(filter, context)).map((item: MemoryPool) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable()
    memoryPool!: string;

    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Memory', placeholder: 'Enter memory', required: true })
    memory!: string;

    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.NUMBER_RANGE })
    @Serializable()
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Probability', placeholder: 'Enter probability', required: true })
    probability!: number;

    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.NUMBER_RANGE })
    @Serializable()
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Default Clarity', placeholder: 'Enter default clarity', required: true })
    defaultClarity!: number;

    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.NUMBER_RANGE })
    @Serializable()
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Default Importance', placeholder: 'Enter default importance', required: true })
    defaultImportance!: number;

}