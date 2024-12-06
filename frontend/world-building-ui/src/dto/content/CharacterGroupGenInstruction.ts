import { ContentBase } from "../../class/ContentBase";
import { serializeInstruction, deserializeInstruction, BlueprintSetCombinator } from "../../class/GenerationInstruction";
import { CharacterGroupGenInstructionDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";

export class CharacterGroupGenInstruction extends ContentBase {
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter name', required: true })
    @Serializable()
    name!: string

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Character Group Set', required: true })
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
