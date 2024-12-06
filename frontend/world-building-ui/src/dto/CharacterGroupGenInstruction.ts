import { ContentBase } from "../class/ContentBase";
import { serializeInstruction, deserializeInstruction, BlueprintSetCombinator } from "../class/GenerationInstruction";
import { CharacterGroupGenInstructionDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";

export class CharacterGroupGenInstruction extends ContentBase {
    @Serializable()
    name!: string

    @Serializable({ serialize: serializeInstruction, deserialize: deserializeInstruction })
    set!: BlueprintSetCombinator;

    public toDTO(): CharacterGroupGenInstructionDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: CharacterGroupGenInstructionDTO): CharacterGroupGenInstruction {
        const chGrpGenInstruction = new CharacterGroupGenInstruction();
        return Serializer.fromDTO(dto, chGrpGenInstruction);
    }
}
