import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { GenerationInstruction } from "../../types";
import { serializeInstruction, deserializeInstruction } from "../../class/blueprint_id_and_prob";
import { ItemSetDTO } from "../../proto/common";

@Entity()
export class ItemSet extends ContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "ITEM_SET"
    
    @Column({ type: "jsonb" })
    set!: GenerationInstruction;

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    
    public toDTO(): ItemSetDTO {
        return {
            id: this.id,
            blueprintId: this.blueprint_id,
            set: serializeInstruction(this.set),
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }

    public static fromDTO(dto: ItemSetDTO, user: User, world: World, campaign?: Campaign): ItemSet {
        if (!dto.set) throw new Error("did not receive field 'set' on ItemSetDTO, and it is mandatory")
        const itemSet = new ItemSet();
        itemSet.id = dto.id;
        itemSet.set = deserializeInstruction(dto.set);
        itemSet.user = user;
        itemSet.campaign = campaign;
        itemSet.world = world;
        itemSet.targetEntity = dto.targetEntity
        return itemSet;
    }
}
