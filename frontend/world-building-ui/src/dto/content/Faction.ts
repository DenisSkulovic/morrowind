import { TaggableContentBase } from "../../class/TaggableContentBase";
import { common } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { Tag } from "./Tag";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { EntityDisplay } from "../../decorator/entity-display.decorator";
import { DisplayField } from "../../decorator/display-field.decorator";
import { FilterOption } from "../../decorator/filter-option.decorator";
import { ContentService } from "../../services/ContentService";
import { Context } from "../../class/Context";
import { SearchQuery } from "../../class/search/SearchQuery";

@EntityDisplay({
    title: 'Factions',
    defaultSort: 'name'
})
export class Faction extends TaggableContentBase {
    @DisplayField({ order: 1 })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter faction name', required: true })
    name!: string;

    public toDTO(): common.FactionDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: common.FactionDTO): Faction {
        const faction = new Faction();
        return Serializer.fromDTO(dto, faction);
    }

    public static async search(filter: SearchQuery, context: Context): Promise<Faction[]> {
        const contentService = new ContentService<Faction>();
        const { results } = await contentService.searchContent('Faction', filter, context);
        return results as Faction[];
    }
}