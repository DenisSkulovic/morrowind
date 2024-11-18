import { BaseEntity, PrimaryColumn, Column, BeforeInsert, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { Tag } from "./Tag";
import { User } from "./User";
import { Campaign } from "./Campaign";
import { World } from "./World";

export class ContentBase extends BaseEntity {
    @PrimaryColumn()
    id: string;

    abstract id_prefix: string; // Each entity defines its own prefix

    @BeforeInsert()
    generateId() {
        const counter = Math.floor(Math.random() * 100000).toString().padStart(5, '0'); // Example counter
        this.id = `${this.id_prefix}_${counter}`;
    }

    /**
     * The user who owns or created this content (if applicable).
     * Null for system-generated or global content.
     */
    @ManyToOne(() => User, { nullable: true })
    user?: User;

    /**
     * The campaign this content belongs to (Layer 3).
     * Null for global/world content.
     */
    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    /**
     * The world this content belongs to (Layer 2).
     * Required for world-level blueprints.
     */
    @ManyToOne(() => World, { nullable: true })
    world?: World;

    /**
     * Tags associated with this content for categorization or relationships.
     */
    @ManyToMany(() => Tag, (tag) => tag.content)
    @JoinTable() // Defines the owning side of the relation
    tags: Tag[];

    /**
     * Optional metadata or settings as a JSON field for extensibility.
     */
    @Column({ type: "json", nullable: true })
    metadata?: Record<string, any>; // Arbitrary key-value pairs for additional data


    targetEntity?: string
}
