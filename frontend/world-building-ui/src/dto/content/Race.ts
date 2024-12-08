import { ContentBase } from "../../class/ContentBase";
import { serializeEquipmentSlotDefinitions, deserializeEquipmentSlotDefinitions, EquipmentSlotDefinition } from "../../class/ItemSlotDefinition";
import { RaceDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { EntityDisplay } from "../../decorator/entity-display.decorator";
import { DisplayField } from "../../decorator/display-field.decorator";
import { FilterOption } from "../../decorator/filter-option.decorator";
import { ContentService } from "../../services/ContentService";
import { SearchQuery } from "../../class/search/SearchQuery";
import { Context } from "../../class/Context";

@EntityDisplay({
    title: 'Races',
    defaultSort: 'name'
})
export class Race extends ContentBase {
    @DisplayField({ order: 1 })
    @FilterOption()
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

    public static async search(filter: SearchQuery, context: Context): Promise<Race[]> {
        const contentService = new ContentService<Race>();
        const { results } = await contentService.searchContent('Race', filter, 1, 100, context);
        return results as Race[];
    }
}
