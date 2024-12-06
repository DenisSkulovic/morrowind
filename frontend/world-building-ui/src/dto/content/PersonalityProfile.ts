import { ContentBase } from "../../class/ContentBase";
import { serializeInstruction, deserializeInstruction, GenerationInstruction } from "../../class/GenerationInstruction";
import { PersonalityProfileDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";

export class PersonalityProfile extends ContentBase {
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter personality profile name', required: true })
    name!: string;

    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Enneagram Type', placeholder: 'Enter enneagram type' })
    enneagramType!: string; // Enneagram type with wing as a string.

    @Serializable({
        serialize: serializeInstruction,
        deserialize: deserializeInstruction,
    })
    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Traits' })
    traits!: GenerationInstruction[];

    public toDTO(): PersonalityProfileDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: PersonalityProfileDTO): PersonalityProfile {
        const persProfile = new PersonalityProfile();
        return Serializer.fromDTO(dto, persProfile);
    }
}
