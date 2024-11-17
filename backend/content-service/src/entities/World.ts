import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Campaign } from "./Campaign";
import { ContentBase } from "./ContentBase";

@Entity()
export class World {
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
}
