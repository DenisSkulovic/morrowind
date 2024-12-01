import { Entity, Column, ManyToMany, ManyToOne, TableInheritance, PrimaryColumn } from "typeorm";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "../Tag";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";
import { TraitDTO } from "../../../proto/common";
import { Context } from "../../../types";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Trait extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;

    id_prefix = "TRAIT";

    @Column({ default: "PLACEHOLDER" })
    name!: string;

    @ManyToMany(() => Tag, (tag) => tag.traits, {})
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true, })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true, })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true, })
    world!: World;

    public static toDTO(trait: Trait): TraitDTO {
        return {
            id: trait.id,
            blueprintId: trait.blueprint_id,
            name: trait.name,
            tags: Trait.serializeEntityArray(trait.tags, i => Tag.toDTO(i)),
            user: Trait.serializeEntity(trait.user, i => User.toDTO(i)),
            campaign: Trait.serializeEntity(trait.campaign, i => Campaign.toDTO(i)),
            world: Trait.serializeEntity(trait.world, i => World.toDTO(i)),
            targetEntity: trait.targetEntity
        };
    }

    public static fromDTO(dto: TraitDTO, context: Context): Trait {
        const trait = new Trait();
        trait.id = dto.id;
        trait.name = dto.name;
        trait.tags = Trait.deserializeEntityArray(dto.tags, i => Tag.fromDTO(i, context));
        trait.user = context.user;
        trait.campaign = context.campaign;
        trait.world = context.world;
        trait.targetEntity = dto.targetEntity
        return trait;
    }
}
