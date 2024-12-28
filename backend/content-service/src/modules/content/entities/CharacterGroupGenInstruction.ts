import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { CharacterGroupGenInstructionDTO, ConditionEnumDTO } from "../../../proto/common";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { serializeInstruction, deserializeInstruction, BlueprintSetCombinator } from "../../../class/GenerationInstruction";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";

@Entity()
export class CharacterGroupGenInstruction extends ContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    idPrefix = "CHARACTER_GROUP_GEN_INSTRUCTION"

    @Column()
    @Serializable()
    name!: string

    @Column({ type: "jsonb" })
    @Serializable({ serialize: serializeInstruction, deserialize: deserializeInstruction })
    set!: BlueprintSetCombinator;

    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    world!: World;

    public toDTO(): CharacterGroupGenInstructionDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: CharacterGroupGenInstructionDTO): CharacterGroupGenInstruction {
        const chGrpGenInstruction = new CharacterGroupGenInstruction();
        return Serializer.fromDTO(dto, chGrpGenInstruction);
    }
}
