import { TaggableContentBase } from "../../class/TaggableContentBase";
import { common } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { DisplayField } from '../../decorator/display-field.decorator';
import { EntityDisplay } from '../../decorator/entity-display.decorator';
import { FilterOption } from "../../decorator/filter-option.decorator";
import { ContentService } from "../../services/ContentService";
import { Context } from "../../class/Context";
import { SearchQuery } from "../../class/search/SearchQuery";

@EntityDisplay({
    title: 'Facts',
    defaultSort: 'name'
})
export class Fact extends TaggableContentBase {
    @DisplayField({ order: 1 })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter fact name', required: true })
    name!: string

    @DisplayField({ order: 2 })
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter fact description', required: true })
    description!: string

    @DisplayField({ order: 3 })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Weight', placeholder: 'Enter weight (1-20)', required: true })
    weight!: number // 1 to 20; How "objectively" important the fact is. For example Red Mountain eruption is 20, because its a global event, but to a farmer in Leyawiin it may be a 2 of personal importance of the memory as a whole. The larger the weight, the more you need to accumulate "decay" to forget it. Lower weight facts are forgotten quicker.

    public toDTO(): common.FactDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: common.FactDTO): Fact {
        const fact = new Fact();
        return Serializer.fromDTO(dto, fact);
    }

    public static async search(filter: SearchQuery, context: Context): Promise<Fact[]> {
        const contentService = new ContentService<Fact>();
        const { results } = await contentService.searchContent('Fact', filter, context);
        return results as Fact[];
    }
}
