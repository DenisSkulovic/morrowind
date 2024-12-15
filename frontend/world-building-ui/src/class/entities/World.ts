import { Serializable } from "../../decorator/serializable.decorator";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { DisplayField } from "../../decorator/display-field.decorator";
import { EntityDisplay } from "../../decorator/entity-display.decorator";
import { FilterOption } from "../../decorator/filter-option.decorator";

@EntityDisplay({
    title: 'Worlds',
    defaultSort: 'name'
})
export class World {
    @Serializable()
    id!: string;

    @Serializable()
    user!: string;

    @DisplayField({ order: 1 })
    @FilterOption()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter world name', required: true })
    @Serializable()
    name!: string; // Name of the world, e.g., "Morrowind", "Middle-earth".

    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter world description' })
    @Serializable()
    description?: string; // Optional description or lore of the world.

    @FormField({ component: FieldComponentEnum.OBJECT_FIELD, label: 'Settings', placeholder: 'Enter world settings' })
    @Serializable()
    settings?: any; // Custom world settings (e.g., starting conditions, mechanics).

    @DisplayField({ order: 2 })
    @FilterOption()
    @FormField({ component: FieldComponentEnum.MULTI_SELECT_FIELD, label: 'Campaigns', required: true })
    @Serializable()
    campaigns!: string[]

}
