import { ContentBase } from "../class/ContentBase";
import { serializeEquipmentSlotDefinitions, deserializeEquipmentSlotDefinitions, EquipmentSlotDefinition } from "../class/ItemSlotDefinition";
import { RaceDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";
import { FormSelectOption } from "../class/FormSelectOption";

export class Race extends ContentBase {
    @Serializable()
    name!: string;

    @Serializable({
        serialize: serializeEquipmentSlotDefinitions,
        deserialize: deserializeEquipmentSlotDefinitions,
    })
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
