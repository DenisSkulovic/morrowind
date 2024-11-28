import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { TaggableContentBase } from "../../TaggableContentBase";
import { Tag } from "./Tag";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { Character } from "./Character";
import { FactionDTO } from "../../proto/common";

@Entity()
export class Faction extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "FACTION"

    @Column()
    name!: string

    @ManyToMany(() => Character, (character) => character.factions)
    characters?: Character[];
    
    @ManyToMany(() => Tag, (tag) => tag.factions)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public toDTO(): FactionDTO {
        return {
            id: this.id,
            name: this.name,
            blueprintId: this.blueprint_id,
            characters: this.characters ? { characters: this.characters.map(character => character.toDTO()) } : undefined,
            tags: this.tags ? { tags: this.tags.map(tag => tag.toDTO()) } : undefined,
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }

    public static fromDTO(dto: FactionDTO, user: User, world: World, campaign?: Campaign): Faction {
        const faction = new Faction();
        faction.id = dto.id;
        faction.characters = dto.characters?.characters?.map(i=>Character.fromDTO(i, user, world, campaign)) || [];
        faction.tags = dto.tags?.tags?.map(tag => Tag.fromDTO(tag, user, world, campaign)) || [];
        faction.user = user;
        faction.campaign = campaign;
        faction.world = world;
        faction.targetEntity = dto.targetEntity
        return faction;
    }
}