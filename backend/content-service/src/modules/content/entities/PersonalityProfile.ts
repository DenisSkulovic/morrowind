import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { PersonalityProfileDTO } from "../../../proto/entities";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";
import { Serializable } from "../../../decorator/serializable.decorator";
import { serializeInstruction, deserializeInstruction, GenerationInstruction } from "../../../class/GenerationInstruction";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';
import { GenerationInstructionGQLUnion } from "../../../class/GenerationInstruction";

@Entity()
@GQLObjectType({ implements: ContentBase })
export class PersonalityProfile extends ContentBase {
    @PrimaryColumn()
    @GQLField(() => GQLID)
    @Serializable()
    id!: string;

    idPrefix = "PROFILE";

    @Column({ type: "varchar", length: 255 })
    @GQLField()
    @Serializable()
    name!: string;

    @Column({ type: "varchar", length: 3 })
    @GQLField()
    @Serializable()
    enneagramType!: string; // Enneagram type with wing as a string.

    @Column("jsonb")
    @GQLField(() => [GenerationInstructionGQLUnion])
    @Serializable({ serialize: serializeInstruction, deserialize: deserializeInstruction, })
    traits!: GenerationInstruction[];

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

    public toDTO(): PersonalityProfileDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: PersonalityProfileDTO): PersonalityProfile {
        return Serializer.fromDTO(dto, new PersonalityProfile());
    }
}
