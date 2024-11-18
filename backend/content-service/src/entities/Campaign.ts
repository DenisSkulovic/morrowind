import { TableInheritance, Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { World } from "./World";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } }) // Discriminator column for inheritance
export class Campaign {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string; // Name of the campaign, e.g., "Hero's Journey".

    @Column({ type: "text", nullable: true })
    description?: string; // Optional description of the campaign.

    @Column({ type: "json", nullable: true })
    dynamic_state?: any; // JSON to store campaign-specific dynamic data (e.g., NPC states, events).

    @ManyToOne(() => World, (world) => world.campaigns)
    world: World; // Reference to the originating world.

    @Column()
    created_at: Date; // Timestamp of when the campaign was created.

    @Column()
    user_id: string; // User who created this campaign.
}
