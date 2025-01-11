import { ContentBase } from "../../../class/ContentBase";
import { EquipmentSlotDefinition } from "../../../class/ItemSlotDefinition";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { EntityDisplay } from "../../../decorator/entity-display.decorator";
import { DisplayField } from "../../../decorator/display-field.decorator";
import { FilterOption, FilterOptionTypeEnum } from "../../../decorator/filter-option.decorator";
import { EquipmentSlotDefinitionDTO, EquipmentSlotDefinitionsDTO } from "../../../proto/entities_pb";
import { SerializeStrategyEnum } from "../../../serialize/serializer";

@EntityDisplay({
    title: 'Races',
    defaultSort: 'name'
})
export class Race extends ContentBase {
    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter race name', required: true })
    name!: string;

    @Serializable({ strategy: SerializeStrategyEnum.FULL, internalClass: EquipmentSlotDefinition, dtoClass: EquipmentSlotDefinitionDTO, dtoArrClass: EquipmentSlotDefinitionsDTO })
    @FormField({ component: FieldComponentEnum.NESTED_FORM, label: 'Equipment Slot Definitions' })
    equipment_slot_definitions!: EquipmentSlotDefinition[]

}