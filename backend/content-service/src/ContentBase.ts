import { BaseEntity, Column } from "typeorm";
import { User } from "./entities/User";
import { Campaign } from "./entities/Campaign";
import { World } from "./entities/World";

export abstract class ContentBase extends BaseEntity {
    // @PrimaryColumn()
    // id!: string;

    id_prefix: string = "PREFIX_PLACEHOLDER"; // Each entity defines its own prefix

    @Column({ type: "varchar", length: 255, nullable: true })
    blueprint_id?: string;

    // @BeforeInsert()
    // generateId() {
    //     const counter = Math.floor(Math.random() * 100000).toString().padStart(5, '0'); // Example counter
    //     this.id = `${this.id_prefix}_${counter}`;
    // }



    /**
     * Optional metadata or settings as a JSON field for extensibility.
     */
    @Column({ type: "json", nullable: true })
    metadata?: Record<string, any>; // Arbitrary key-value pairs for additional data


    targetEntity?: string
}
