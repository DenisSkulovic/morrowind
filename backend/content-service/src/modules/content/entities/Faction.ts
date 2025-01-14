import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "./Tag";
import { Character } from "./Character";
import { FactionDTO } from "../../../proto/entities";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";
import { Serializable } from "../../../decorator/serializable.decorator";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@Entity()
@GQLObjectType({ implements: TaggableContentBase })
export class Faction extends TaggableContentBase {
    @PrimaryColumn()
    @Serializable()
    @GQLField(() => GQLID)
    id!: string;

    idPrefix = "FACTION"

    @Column()
    @Serializable()
    @GQLField()
    name!: string

    @ManyToMany(() => Character, (character) => character.factions, {})
    @GQLField(() => [Character])
    characters?: Character[];

    @ManyToMany(() => Tag, (tag) => tag.factions, {})
    @GQLField(() => [Tag])
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true, })
    @GQLField(() => User, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true, })
    @GQLField(() => Campaign, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true, })
    @GQLField(() => World, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    world!: World;

    public toDTO(): FactionDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: FactionDTO): Faction {
        const faction = new Faction();
        return Serializer.fromDTO(dto, faction);
    }

}