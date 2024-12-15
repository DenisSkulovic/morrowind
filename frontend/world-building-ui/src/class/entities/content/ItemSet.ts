import { ContentBase } from "../../../class/ContentBase";
import { serializeGenerationInstructions, deserializeGenerationInstructions, GenerationInstruction } from "../../../class/GenerationInstruction";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { DisplayField } from "../../../decorator/display-field.decorator";
import { EntityDisplay } from "../../../decorator/entity-display.decorator";
import { FilterOption } from "../../../decorator/filter-option.decorator";
import { Context } from "../../../class/Context";
import { ContentService } from "../../../services/ContentService";
import { SearchQuery } from "../../../class/search/SearchQuery";

@EntityDisplay({
    title: 'Item Sets',
    defaultSort: 'name'
})
export class ItemSet extends ContentBase {
    @DisplayField({ order: 1 })
    @FilterOption()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter item set name', required: true })
    @Serializable()
    name!: string;

    @DisplayField({ order: 2 })
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter item set description', required: true })
    @Serializable()
    description!: string;

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Generation Instructions', required: true })
    @Serializable({
        serialize: serializeGenerationInstructions,
        deserialize: deserializeGenerationInstructions
    })
    set!: GenerationInstruction[];

    public static async search(filter: SearchQuery, context: Context): Promise<ItemSet[]> {
        const contentService = new ContentService<ItemSet>();
        const { results } = await contentService.searchContent('ItemSet', filter, context);
        return results as ItemSet[];
    }
}
