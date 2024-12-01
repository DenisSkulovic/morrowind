import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { TaggableContentBase } from "../../TaggableContentBase";
import { Tag } from "./Tag";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { Character } from "./Character";
import { FactionDTO } from "../../proto/common";
import { Context } from "../../types";

@Entity()
export class Faction extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;

    id_prefix = "FACTION"

    @Column()
    name!: string

    @ManyToMany(() => Character, (character) => character.factions, {})
    characters?: Character[];

    @ManyToMany(() => Tag, (tag) => tag.factions, {})
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true, })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true, })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true, })
    world!: World;

    public static toDTO(faction: Faction): FactionDTO {
        return {
            id: faction.id,
            name: faction.name,
            blueprintId: faction.blueprint_id,
            characters: Faction.serializeEntityArray(faction.characters, i => Character.toDTO(i)),
            tags: Faction.serializeEntityArray(faction.tags, i => Tag.toDTO(i)),
            user: Faction.serializeEntity(faction.user, i => User.toDTO(i)),
            campaign: Faction.serializeEntity(faction.campaign, i => Campaign.toDTO(i)),
            world: Faction.serializeEntity(faction.world, i => World.toDTO(i)),
            targetEntity: faction.targetEntity
        };
    }

    public static fromDTO(dto: FactionDTO, context: Context): Faction {
        const faction = new Faction();
        faction.id = dto.id;
        faction.characters = Faction.deserializeEntityArray(dto.characters, i => Character.fromDTO(i, context));
        faction.tags = Faction.deserializeEntityArray(dto.tags, i => Tag.fromDTO(i, context));
        faction.user = context.user;
        faction.campaign = context.campaign;
        faction.world = context.world;
        faction.targetEntity = dto.targetEntity
        return faction;
    }
}