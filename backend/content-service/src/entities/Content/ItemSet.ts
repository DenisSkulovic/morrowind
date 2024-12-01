import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { Context, GenerationInstruction } from "../../types";
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


    public static toDTO(itemSet: ItemSet): ItemSetDTO {
        return {
            id: itemSet.id,
            blueprintId: itemSet.blueprint_id,
            set: serializeInstruction(itemSet.set),
            user: ItemSet.serializeEntity(itemSet.user, i => User.toDTO(i)),
            campaign: ItemSet.serializeEntity(itemSet.campaign, i => Campaign.toDTO(i)),
            world: ItemSet.serializeEntity(itemSet.world, i => World.toDTO(i)),
            targetEntity: itemSet.targetEntity
        };
    }

    public static fromDTO(dto: ItemSetDTO, context: Context): ItemSet {
        if (!dto.set) throw new Error("did not receive field 'set' on ItemSetDTO, and it is mandatory")
        const itemSet = new ItemSet();
        itemSet.id = dto.id;
        itemSet.set = deserializeInstruction(dto.set);
        itemSet.user = context.user;
        itemSet.campaign = context.campaign;
        itemSet.world = context.world;
        itemSet.targetEntity = dto.targetEntity
        return itemSet;
    }
}
