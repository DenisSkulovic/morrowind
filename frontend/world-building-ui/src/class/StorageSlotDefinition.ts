import { FormField } from "../decorator/form-field.decorator"
import { FieldComponentEnum } from "../enum/FieldComponentEnum"
import { Serializable } from "../decorator/serializable.decorator";
import { GridSize } from "./GridSize";
import { SerializeStrategyEnum } from "../serialize/serializer";
import { GridSizeDTO } from "../proto/common_pb";

export class StorageSlotDefinition {
    clazz = "StorageSlotDefinition"

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter storage slot name', required: true })
    @Serializable()
    name!: string;

    @FormField({ component: FieldComponentEnum.OBJECT_FIELD, label: 'Grid Size', placeholder: 'Enter grid dimensions', required: true })
    @Serializable({ strategy: SerializeStrategyEnum.FULL, dtoClass: GridSizeDTO })
    grid!: GridSize;

    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Max Weight', placeholder: 'Enter maximum weight', required: true })
    @Serializable()
    maxWeight!: number;

}