import { ContentBase } from "../../../class/ContentBase";
import { serializeInstruction, deserializeInstruction, GenerationInstruction } from "../../../class/GenerationInstruction";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { DisplayField } from '../../../decorator/display-field.decorator';
import { EntityDisplay } from '../../../decorator/entity-display.decorator';
import { FilterOption } from '../../../decorator/filter-option.decorator';

@EntityDisplay({
    title: 'Personality Profiles',
    defaultSort: 'name'
})
export class PersonalityProfile extends ContentBase {
    @DisplayField({ order: 1 })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter personality profile name', required: true })
    name!: string;

    @DisplayField({ order: 2 })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Enneagram Type', placeholder: 'Enter enneagram type' })
    enneagramType!: string; // Enneagram type with wing as a string.

    @Serializable({
        serialize: serializeInstruction,
        deserialize: deserializeInstruction,
    })
    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Traits' })
    traits!: GenerationInstruction[];

}
