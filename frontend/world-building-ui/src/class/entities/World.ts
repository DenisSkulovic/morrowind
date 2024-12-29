import { Serializable } from "../../decorator/serializable.decorator";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { DisplayField } from "../../decorator/display-field.decorator";
import { EntityDisplay } from "../../decorator/entity-display.decorator";
import { FilterOption } from "../../decorator/filter-option.decorator";
import { WorldService } from "../../services/WorldService";
import { Context } from "../Context";
import { SearchQuery } from "../search/SearchQuery";
import { LooseObject } from "../../types";
import { Entity } from "../Entity";

@EntityDisplay({
    title: 'Worlds',
    defaultSort: 'name'
})
export class World extends Entity {
    @Serializable()
    id!: string;

    @Serializable()
    user!: string;

    @DisplayField()
    @FilterOption({ displayName: 'Name' })
    @FormField({
        component: FieldComponentEnum.TEXT_FIELD,
        label: 'Name',
        placeholder: 'Enter world name',
        required: true,
        valueRestrictions: {
            name: {
                type: 'string'
            }
        }
    })
    @Serializable()
    name!: string; // Name of the world, e.g., "Morrowind", "Middle-earth".

    @FormField({
        component: FieldComponentEnum.TEXTAREA_FIELD,
        label: 'Description',
        placeholder: 'Enter world description',
        valueRestrictions: {
            description: {
                type: 'string'
            }
        }
    })
    @Serializable()
    description?: string; // Optional description or lore of the world.

    @FormField({
        component: FieldComponentEnum.OBJECT_FIELD,
        label: 'Settings',
        placeholder: 'Enter world settings',
        allowNewKeys: false,
    })
    @Serializable()
    settings?: any; // Custom world settings (e.g., starting conditions, mechanics).

    @DisplayField()
    @FilterOption({ displayName: 'Campaigns' })
    @Serializable()
    campaigns?: string[]

    public static build(obj: { [key: string]: any }): World {
        const world = new World();
        Object.assign(world, obj);
        return world;
    }

    public static async search(filter: SearchQuery, context: Context): Promise<World[]> {
        const worldService = new WorldService();
        return worldService.search(filter, context);
    }

}