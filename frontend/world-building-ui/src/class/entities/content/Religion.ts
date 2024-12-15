import { ContentBase } from "../../../class/ContentBase";
import { ReligionRitual } from "../../../class/ReligionRitual";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { DisplayField } from '../../../decorator/display-field.decorator';
import { EntityDisplay } from '../../../decorator/entity-display.decorator';
import { FilterOption } from '../../../decorator/filter-option.decorator';
import { Context } from '../../../class/Context';
import { SearchQuery } from '../../../class/search/SearchQuery';
import { ContentService } from '../../../services/ContentService';
import { ReligionTenet } from '../../../class/ReligionTenet';

@EntityDisplay({
    title: 'Religions',
    defaultSort: 'name'
})
export class Religion extends ContentBase {
    @DisplayField({
        order: 1,
        displayName: 'Name'
    })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter religion name', required: true })
    name!: string;

    @DisplayField({
        order: 2,
        displayName: 'Description'
    })
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter religion description', required: true })
    description!: string;

    @Serializable({ strategy: 'full', getDTOInstance: () => new ReligionRitual() })
    @FormField({ component: FieldComponentEnum.NESTED_FORM, label: 'Rituals' })
    rituals?: ReligionRitual[];

    @Serializable({ strategy: 'full' })
    @FormField({ component: FieldComponentEnum.NESTED_FORM, label: 'Tenets' })
    tenets?: ReligionTenet[];

    public static async search(filter: SearchQuery, context: Context): Promise<Religion[]> {
        const contentService = new ContentService<Religion>();
        const { results } = await contentService.searchContent('Religion', filter, context);
        return results as Religion[];
    }
}
