import { ContentBase } from "../class/ContentBase";
import { serializeInstruction, deserializeInstruction, GenerationInstruction } from "../class/GenerationInstruction";
import { PersonalityProfileDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";

export class PersonalityProfile extends ContentBase {
    @Serializable()
    name!: string;

    @Serializable()
    enneagramType!: string; // Enneagram type with wing as a string.

    @Serializable({
        serialize: serializeInstruction,
        deserialize: deserializeInstruction,
    })
    traits!: GenerationInstruction[];

    public toDTO(): PersonalityProfileDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: PersonalityProfileDTO): PersonalityProfile {
        const persProfile = new PersonalityProfile();
        return Serializer.fromDTO(dto, persProfile);
    }
}
