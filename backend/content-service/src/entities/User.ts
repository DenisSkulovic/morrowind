import { TableInheritance, Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from "typeorm";
import { Campaign } from "./Campaign";
import { World } from "./World";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } }) // Discriminator column for inheritance
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true })
    username: string; // Unique username.

    @Column()
    password_hash: string; // Hashed password for authentication.

    @Column({ nullable: true })
    email?: string; // Optional email for communication and recovery.

    @OneToMany(() => World, (world) => world)
    worlds: World[]; // Worlds created by this user.

    @OneToMany(() => Campaign, (campaign) => campaign)
    campaigns: Campaign[]; // Campaigns created or managed by this user.

    @Column({ default: "player" })
    role: string; // Role of the user: "player", "admin", etc.

    @Column({ type: "json", nullable: true })
    preferences?: any; // User-specific preferences/settings.
}
