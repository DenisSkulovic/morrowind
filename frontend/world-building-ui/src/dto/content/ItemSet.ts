import { ContentBase } from "../../class/ContentBase";
import { serializeGenerationInstructions, deserializeGenerationInstructions, GenerationInstruction } from "../../class/GenerationInstruction";
import { ItemSetDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";

export class ItemSet extends ContentBase {
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter item set name', required: true })
    @Serializable()
    name!: string;

    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter item set description', required: true })
    @Serializable()
    description!: string;

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Generation Instructions', required: true })
    @Serializable({
        serialize: serializeGenerationInstructions,
        deserialize: deserializeGenerationInstructions
    })
    set!: GenerationInstruction[];

    public toDTO(): ItemSetDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: ItemSetDTO): ItemSet {
        const itemSet = new ItemSet();
        return Serializer.fromDTO(dto, itemSet);
    }
}
