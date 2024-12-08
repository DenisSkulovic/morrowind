import { ContentBase } from "../../class/ContentBase";
import { AddictionDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { EntityDisplay } from "../../decorator/entity-display.decorator";
import { FilterOption } from "../../decorator/filter-option.decorator";
import { DisplayField } from "../../decorator/display-field.decorator";
import { ContentService } from "../../services/ContentService";
import { SearchQuery } from "../../class/search/SearchQuery";
import { Context } from "../../class/Context";

@EntityDisplay({
    title: 'Addictions',
    defaultSort: 'name'
})
export class Addiction extends ContentBase {
    @DisplayField({
        order: 1
    })
    @FilterOption()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter addiction name', required: true })
    @Serializable()
    name!: string

    public toDTO(): AddictionDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: AddictionDTO): Addiction {
        const addiction = new Addiction();
        return Serializer.fromDTO(dto, addiction);
    }

    public static async search(filter: SearchQuery, context: Context): Promise<Addiction[]> {
        const contentService = new ContentService<Addiction>();
        const { results } = await contentService.searchContent('Addiction', filter, 1, 100, context);
        return results as Addiction[];
    }
}