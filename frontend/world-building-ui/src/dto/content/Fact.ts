import { TaggableContentBase } from "../../class/TaggableContentBase";
import { FactDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";

export class Fact extends TaggableContentBase {
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter fact name', required: true })
    name!: string

    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter fact description', required: true })
    description!: string

    @Serializable()
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Weight', placeholder: 'Enter weight (1-20)', required: true })
    weight!: number // 1 to 20; How "objectively" important the fact is. For example Red Mountain eruption is 20, because its a global event, but to a farmer in Leyawiin it may be a 2 of personal importance of the memory as a whole. The larger the weight, the more you need to accumulate "decay" to forget it. Lower weight facts are forgotten quicker.

    public toDTO(): FactDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: FactDTO): Fact {
        const fact = new Fact();
        return Serializer.fromDTO(dto, fact);
    }

}