import { TaggableContentBase } from "../../../class/TaggableContentBase";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { EntityDisplay } from "../../../decorator/entity-display.decorator";
import { DisplayField } from "../../../decorator/display-field.decorator";
import { FilterOption } from "../../../decorator/filter-option.decorator";
import { ContentService } from "../../../services/ContentService";
import { Context } from "../../../class/Context";
import { SearchQuery } from "../../../class/search/SearchQuery";

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

    public static async search(filter: SearchQuery, context: Context): Promise<Birthsign[]> {
        const contentService = new ContentService<Birthsign>();
        const { results } = await contentService.searchContent('Birthsign', filter, context);
        return results as Birthsign[];
    }
}