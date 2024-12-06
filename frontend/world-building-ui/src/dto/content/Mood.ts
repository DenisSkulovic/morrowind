import { ContentBase } from "../../class/ContentBase";
import { MoodDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";

export class Mood extends ContentBase {
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter mood name', required: true })
    name!: string;

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
}
