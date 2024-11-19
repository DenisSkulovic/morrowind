import { TableInheritance, Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from "typeorm";
import { Campaign } from "./Campaign";
import { ContentBase } from "./Content/ContentBase";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } }) // Discriminator column for inheritance
export class World extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string; // Name of the world, e.g., "Morrowind", "Middle-earth".

    @Column({ type: "text", nullable: true })
    description?: string; // Optional description or lore of the world.

    @Column({ type: "json", nullable: true })
    settings?: any; // Custom world settings (e.g., starting conditions, mechanics).

    @OneToMany(() => Campaign, (campaign) => campaign.world)
    campaigns: Campaign[]; // Associated campaigns created from this world.

    @OneToMany(() => ContentBase, (content) => content.world_id)
    content: ContentBase[]; // All blueprints linked to this world.

    @Column({ default: false })
    frozen: boolean;
}
