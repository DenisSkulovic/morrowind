import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { ReligionDTO } from "../../../proto/entities";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { ReligionRitual } from "../../../class/ReligionRitual";
import { ReligionTenet } from "../../../class/ReligionTenet";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@Entity()
@GQLObjectType({ implements: ContentBase })
export class Religion extends ContentBase {

    @PrimaryColumn()
    @GQLField(() => GQLID)
    @Serializable()
    id!: string;

    idPrefix = "RELIGION";

    /**
     * The name of the religion.
     */
    @Column({ type: "varchar", length: 255 })
    @GQLField()
    @Serializable()
    name!: string;

    /**
     * A description of the religion, outlining its beliefs and core philosophy.
     */
    @Column({ type: "text" })
    @GQLField()
    @Serializable()
    description!: string;

    /**
     * A list of common rituals or practices for this religion.
     */
    @Column("jsonb", { nullable: true })
    @GQLField(() => [ReligionRitual])
    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: ReligionRitual })
    rituals?: ReligionRitual[];

    /**
     * A list of moral or behavioral principles associated with the religion.
     */
    @Column("jsonb", { nullable: true })
    @GQLField(() => [ReligionTenet])
    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: ReligionTenet })
    tenets?: ReligionTenet[];

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

    public toDTO(): ReligionDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: ReligionDTO): Religion {
        return Serializer.fromDTO(dto, new Religion());
    }
}
