import { BaseEntity, PrimaryColumn, Column, BeforeInsert } from "typeorm";
import { v4 as uuidv4 } from "uuid";

export abstract class ContentBase extends BaseEntity {

    @PrimaryColumn()
    id: string;

    @BeforeInsert()
    generateId() {
        const uuid = uuidv4().replace(/-/g, ""); // Generate UUID without dashes
        const prefix = this.constructor.name.toLowerCase(); // Use the class name as the prefix
        this.id = `${prefix}_${uuid}`;
    }

    @Column({ nullable: true })
    user_id?: string;

    @Column({ nullable: true })
    campaign_id?: string;

    @Column({ nullable: true })
    world_id?: string;
}
