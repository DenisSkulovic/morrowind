import { BaseEntity, PrimaryColumn, Column, BeforeInsert, ManyToMany, JoinTable } from "typeorm";
import { Tag } from "./Tag";

export abstract class ContentBase extends BaseEntity {

    @PrimaryColumn()
    id: string;

    abstract id_prefix: string; // Each entity defines its own prefix

    @BeforeInsert()
    generateId() {
        const counter = Math.floor(Math.random() * 100000).toString().padStart(5, '0'); // Example counter
        this.id = `${this.id_prefix}_${counter}`;
    }

    @Column({ nullable: true })
    user_id?: string;

    @Column({ nullable: true })
    campaign_id?: string;

    @Column({ nullable: true })
    world_id?: string;

    @ManyToMany(() => Tag, (tag) => tag.content)
    @JoinTable() // Defines the owning side of the relation
    tags: Tag[];
}
