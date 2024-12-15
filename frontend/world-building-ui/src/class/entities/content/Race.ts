import { ContentBase } from "../../../class/ContentBase";
import { EquipmentSlotDefinition } from "../../../class/ItemSlotDefinition";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { EntityDisplay } from "../../../decorator/entity-display.decorator";
import { DisplayField } from "../../../decorator/display-field.decorator";
import { FilterOption } from "../../../decorator/filter-option.decorator";
import { ContentService } from '../../../services/ContentService';
import { SearchQuery } from '../../../class/search/SearchQuery';
import { Context } from '../../../class/Context';

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

    @Serializable({ strategy: 'full', getDTOInstance: () => new EquipmentSlotDefinition() })
    @FormField({ component: FieldComponentEnum.NESTED_FORM, label: 'Equipment Slot Definitions' })
    equipment_slot_definitions!: EquipmentSlotDefinition[]

    public static async search(filter: SearchQuery, context: Context): Promise<Race[]> {
        const contentService = new ContentService<Race>();
        const { results } = await contentService.searchContent('Race', filter, context);
        return results as Race[];
    }
}
