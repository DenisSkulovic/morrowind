import { Entity, Column, ManyToMany, ManyToOne, TableInheritance, PrimaryColumn } from "typeorm";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "../Tag";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";
import { TraitDTO } from "../../../proto/common";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Trait extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "TRAIT";

    @Column({default: "PLACEHOLDER"})
    name!: string;

    @ManyToMany(() => Tag, (tag) => tag.traits)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public toDTO(): TraitDTO {
        return {
            id: this.id,
            blueprintId: this.blueprint_id,
            name: this.name,
            tags: this.tags && {tags: this.tags.map(tag => tag.toDTO())},
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }
    
    public static fromDTO(dto: TraitDTO, user: User, world: World, campaign?: Campaign): Trait {
        const trait = new Trait();
        trait.id = dto.id;
        trait.name = dto.name;
        trait.tags = dto.tags?.tags.map(tag => Tag.fromDTO(tag, user, world, campaign));
        trait.user = user;
        trait.campaign = campaign;
        trait.world = world;
        trait.targetEntity = dto.targetEntity
        return trait;
    }
}
