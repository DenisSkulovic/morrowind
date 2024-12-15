import { FormField } from "../decorator/form-field.decorator"
import { FieldComponentEnum } from "../enum/FieldComponentEnum"
import { Serializable } from "../decorator/serializable.decorator";
import { deserializeGrid, GridSize, serializeGrid } from "./GridSize";

export class StorageSlotDefinition {
    clazz = "StorageSlotDefinition"

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter storage slot name', required: true })
    @Serializable()
    name!: string;

    @FormField({ component: FieldComponentEnum.OBJECT_FIELD, label: 'Grid Size', placeholder: 'Enter grid dimensions', required: true })
    @Serializable({
        serialize: serializeGrid,
        deserialize: deserializeGrid
    })
    grid!: GridSize;

    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Max Weight', placeholder: 'Enter maximum weight', required: true })
    @Serializable()
    maxWeight!: number;

}