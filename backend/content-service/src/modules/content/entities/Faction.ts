import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "./Tag";
import { Character } from "./Character";
import { FactionDTO } from "../../../proto/common";
import { Context } from "../../../types";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializer } from "../../../serializer";
import { Serializable } from "../../../decorator/serializable.decorator";

@Entity()
export class Faction extends TaggableContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    idPrefix = "FACTION"

    @Column()
    @Serializable()
    name!: string

    @ManyToMany(() => Character, (character) => character.factions, {})
    characters?: Character[];

    @ManyToMany(() => Tag, (tag) => tag.factions, {})
    @Serializable({ strategy: 'id' })
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true, })
    @Serializable({ strategy: 'id' })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true, })
    @Serializable({ strategy: 'id' })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true, })
    @Serializable({ strategy: 'id' })
    world!: World;

    public toDTO(): FactionDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: FactionDTO): Faction {
        const faction = new Faction();
        return Serializer.fromDTO(dto, faction);
    }

}