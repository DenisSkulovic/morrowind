import { ContentBase } from "../class/ContentBase";
import { serializeGenerationInstructions, deserializeGenerationInstructions, GenerationInstruction } from "../class/GenerationInstruction";
import { ItemSetDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";

export class ItemSet extends ContentBase {
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
