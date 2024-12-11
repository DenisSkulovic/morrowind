import { TaggableContentBase } from "../../class/TaggableContentBase";
import { common } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { EntityDisplay } from "../../decorator/entity-display.decorator";
import { DisplayField } from "../../decorator/display-field.decorator";
import { FilterOption } from "../../decorator/filter-option.decorator";
import { ContentService } from "../../services/ContentService";
import { Context } from "../../class/Context";
import { SearchQuery } from "../../class/search/SearchQuery";

@EntityDisplay({
    title: 'Birthsigns',
    defaultSort: 'name'
})
export class Birthsign extends TaggableContentBase {
    @DisplayField({ order: 1 })
    @FilterOption()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter birthsign name', required: true })
    @Serializable()
    name!: string;

    public toDTO(): common.BirthsignDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: common.BirthsignDTO): Birthsign {
        const birthsign = new Birthsign();
        return Serializer.fromDTO(dto, birthsign);
    }

    public static async search(filter: SearchQuery, context: Context): Promise<Birthsign[]> {
        const contentService = new ContentService<Birthsign>();
        const { results } = await contentService.searchContent('Birthsign', filter, context);
        return results as Birthsign[];
    }
}