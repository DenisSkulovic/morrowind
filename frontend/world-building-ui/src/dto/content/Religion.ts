import { ContentBase } from "../../class/ContentBase";
import { serializeReligionRituals, deserializeReligionRituals, ReligionRitual } from "../../class/ReligionRitual";
import { common } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { DisplayField } from '../../decorator/display-field.decorator';
import { EntityDisplay } from '../../decorator/entity-display.decorator';
import { FilterOption } from "../../decorator/filter-option.decorator";
import { Context } from "../../class/Context";
import { SearchQuery } from "../../class/search/SearchQuery";
import { ContentService } from "../../services/ContentService";
import { ReligionTenet } from "../../class/ReligionTenet";

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

    @Serializable({
        serialize: serializeReligionRituals,
        deserialize: deserializeReligionRituals
    })
    @FormField({ component: FieldComponentEnum.NESTED_FORM, label: 'Rituals' })
    rituals?: ReligionRitual[];

    @Serializable({ strategy: 'full' })
    @FormField({ component: FieldComponentEnum.NESTED_FORM, label: 'Tenets' })
    tenets?: ReligionTenet[];

    public toDTO(): common.ReligionDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: common.ReligionDTO): Religion {
        const religion = new Religion();
        return Serializer.fromDTO(dto, religion);
    }

    public static async search(filter: SearchQuery, context: Context): Promise<Religion[]> {
        const contentService = new ContentService<Religion>();
        const { results } = await contentService.searchContent('Religion', filter, context);
        return results as Religion[];
    }
}
