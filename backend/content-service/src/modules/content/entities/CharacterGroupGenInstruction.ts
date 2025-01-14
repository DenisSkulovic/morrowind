import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { CharacterGroupGenInstructionDTO, ConditionEnumDTO } from "../../../proto/entities";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { serializeInstruction, deserializeInstruction, BlueprintSetCombinator } from "../../../class/GenerationInstruction";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@Entity()
@GQLObjectType({ implements: ContentBase })
export class CharacterGroupGenInstruction extends ContentBase {
    @PrimaryColumn()
    @GQLField(() => GQLID)
    @Serializable()
    id!: string;

    idPrefix = "CHARACTER_GROUP_GEN_INSTRUCTION"

    @Column()
    @Serializable()
    name!: string

    @Column({ type: "jsonb" })
    @GQLField(() => BlueprintSetCombinator)
    @Serializable({ serialize: serializeInstruction, deserialize: deserializeInstruction })
    set!: BlueprintSetCombinator;

    @ManyToOne(() => User, { nullable: true })
    @GQLField(() => User, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @GQLField(() => Campaign, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @GQLField(() => World, { nullable: true })
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
