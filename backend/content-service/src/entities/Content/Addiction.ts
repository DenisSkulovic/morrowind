import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { Character } from "./Character";
import { ManyToMany } from "typeorm";
import { AddictionDTO } from "../../proto/common";

@Entity()
export class Addiction extends ContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "ADDICTION"

    @Column()
    name!: string

    @ManyToMany(() => Character)
    characters!: Character[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public toDTO(): AddictionDTO {
        return {
            id: this.id,
            blueprintId: this.blueprint_id,
            name: this.name,
            characters: this.characters ? { characters: this.characters.map(character => character.toDTO()) } : undefined,
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }
    
    public static fromDTO(dto: AddictionDTO, user: User, world: World, campaign?: Campaign): Addiction {
        const addiction = new Addiction();
        addiction.id = dto.id;
        addiction.characters = dto.characters?.characters?.map(i=>Character.fromDTO(i, user, world, campaign)) || [];
        addiction.user = user;
        addiction.campaign = campaign;
        addiction.world = world;
        addiction.targetEntity = dto.targetEntity
        return addiction;
    }
}