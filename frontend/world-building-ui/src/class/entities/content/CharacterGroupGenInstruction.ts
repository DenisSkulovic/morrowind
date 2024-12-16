import { ContentBase } from "../../../class/ContentBase";
import { serializeInstruction, deserializeInstruction, BlueprintSetCombinator } from "../../../class/GenerationInstruction";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { EntityDisplay } from "../../../decorator/entity-display.decorator";
import { DisplayField } from "../../../decorator/display-field.decorator";
import { FilterOption } from "../../../decorator/filter-option.decorator";

@EntityDisplay({
    title: 'Character Group Generation Instructions',
    defaultSort: 'name'
})
export class CharacterGroupGenInstruction extends ContentBase {
    @DisplayField({ order: 1 })
    @FilterOption()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter name', required: true })
    @Serializable()
    name!: string

    @DisplayField({ order: 2 })
    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Character Group Set', required: true })
    @Serializable({ serialize: serializeInstruction, deserialize: deserializeInstruction })
    set!: BlueprintSetCombinator;

}
