import { Entity, TableInheritance, Column, ManyToOne, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { Skill } from "../Skill/Skill";
import { ItemInstanceService } from "../../../layer_2_and_3/generator/ItemInstanceGenerator";
import { ItemRequirements } from "../../../types";
import { Inventory } from "../Inventory";
import { Tag } from "../Tag";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Item extends ContentBase {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
    
    id_prefix = "ITEM";

    @Column({ default: null, nullable: true })
    instance_id!: string;

    @Column({default: "PLACEHOLDER"})
    name!: string; // Item name, e.g., "Iron Short Sword".

    @Column({ nullable: true })
    description?: string; // Item description or lore.

    @Column({default: 0})
    weight!: number;

    @Column({default: 1})
    quantity!: number;

    @Column({default: 0})
    base_value!: number; // Monetary value in gold coins.

    @ManyToOne(() => Skill, skill => skill.items)
    trained_skill?: Skill

    @Column("jsonb", {default: null, nullable: true})
    requirements!: ItemRequirements

    @Column({ default: false })
    consumable!: boolean;

    @Column({ default: false })
    stackable!: boolean;

    @Column({ default: false })
    repairable!: boolean;

    @Column({ default: false })
    drinkable!: boolean;

    @Column({ default: false })
    edible!: boolean;

    @ManyToOne(() => Inventory, inventory => inventory.items)
    inventory?: Inventory;

    public async merge(item2: this): Promise<this> {
        return ItemInstanceService.merge(this, item2);
    }

    
    @ManyToMany(() => Tag, (tag) => tag.items)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user?: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world?: World;
}