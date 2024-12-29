import { ContentBase } from "../../../class/ContentBase";
import { serializeGenerationInstructions, deserializeGenerationInstructions, GenerationInstruction } from "../../../class/GenerationInstruction";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { DisplayField } from "../../../decorator/display-field.decorator";
import { EntityDisplay } from "../../../decorator/entity-display.decorator";
import { FilterOption, FilterOptionTypeEnum } from "../../../decorator/filter-option.decorator";

@EntityDisplay({
    title: 'Item Sets',
    defaultSort: 'name'
})
export class ItemSet extends ContentBase {
    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter item set name', required: true })
    @Serializable()
    name!: string;

    @DisplayField()
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter item set description', required: true })
    @Serializable()
    description!: string;

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Generation Instructions', required: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    set!: GenerationInstruction[];

}
