import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";
import { FormField } from "../decorator/form-field.decorator";
import { FieldComponentEnum } from "../enum/FieldComponentEnum";
import { DisplayField } from "../decorator/display-field.decorator";
import { EntityDisplay } from "../decorator/entity-display.decorator";
import { FilterOption } from "../decorator/filter-option.decorator";
import { common } from "../proto/common";
import { ContentService } from "../services/ContentService";
import { SearchQuery } from "../class/search/SearchQuery";
import { Context } from "../class/Context";

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

    public toDTO(): common.WorldDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: common.WorldDTO): World {
        const world = new World();
        return Serializer.fromDTO(dto, world);
    }
}
