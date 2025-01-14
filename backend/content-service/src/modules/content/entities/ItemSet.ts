import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { ItemSetDTO } from "../../../proto/entities";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";
import { GenerationInstruction, GenerationInstructionGQLUnion, deserializeGenerationInstructions, serializeGenerationInstructions } from "../../../class/GenerationInstruction";
import { Serializable } from "../../../decorator/serializable.decorator";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@Entity()
@GQLObjectType({ implements: ContentBase })
export class ItemSet extends ContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    idPrefix = "ITEM_SET"

    @Column({ type: "jsonb" })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    @GQLField(() => [GenerationInstructionGQLUnion])
    set!: GenerationInstruction[];

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

    public toDTO(): ItemSetDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: ItemSetDTO): ItemSet {
        return Serializer.fromDTO(dto, new ItemSet());
    }

}
