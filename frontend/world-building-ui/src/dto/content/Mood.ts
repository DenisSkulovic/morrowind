import { ContentBase } from "../../class/ContentBase";
import { MoodDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { DisplayField } from '../../decorator/display-field.decorator';
import { EntityDisplay } from '../../decorator/entity-display.decorator';
import { FilterOption } from "../../decorator/filter-option.decorator";
import { Context } from "../../class/Context";
import { ContentService } from "../../services/ContentService";
import { SearchQuery } from "../../class/search/SearchQuery";

@EntityDisplay({
    title: 'Moods',
    defaultSort: 'name'
})
export class Mood extends ContentBase {
    @DisplayField({ order: 1 })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter mood name', required: true })
    name!: string;

    @DisplayField({ order: 2 })
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter mood description', required: true })
    description!: string;

    public toDTO(): MoodDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: MoodDTO): Mood {
        const mood = new Mood();
        return Serializer.fromDTO(dto, mood);
    }

    public static async search(filter: SearchQuery, context: Context): Promise<Mood[]> {
        const contentService = new ContentService<Mood>();
        const { results } = await contentService.searchContent('Mood', filter, 1, 100, context);
        return results as Mood[];
    }
}
