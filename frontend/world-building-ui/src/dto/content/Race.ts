import { ContentBase } from "../../class/ContentBase";
import { serializeEquipmentSlotDefinitions, deserializeEquipmentSlotDefinitions, EquipmentSlotDefinition } from "../../class/ItemSlotDefinition";
import { RaceDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";

export class Race extends ContentBase {
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter race name', required: true })
    name!: string;

    @Serializable({
        serialize: serializeEquipmentSlotDefinitions,
        deserialize: deserializeEquipmentSlotDefinitions,
    })
    @FormField({ component: FieldComponentEnum.NESTED_FORM, label: 'Equipment Slot Definitions' })
    equipment_slot_definitions!: EquipmentSlotDefinition[]

    public toDTO(): RaceDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: RaceDTO): Race {
        const race = new Race();
        return Serializer.fromDTO(dto, race);
    }

    public static async search(filter?: any): Promise<Race[]> {
        // perform request to backend using the filter
        // return array of options
        return []
    }
}
