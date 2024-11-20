import { TableInheritance, Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, OneToOne, JoinColumn } from "typeorm";
import { User } from "./User";


@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Account extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ unique: true })
    username!: string; // Unique username.

    @Column({ type: "varchar", length: 255 })
    password_hash!: string; // Hashed password for authentication.

    @Column({ type: "varchar", length: 255, nullable: true })
    email!: string; // Optional email for communication and recovery.

    @Column({ type: "varchar", length: 255, default: "player" })
    role!: string; // Role of the user: "player", "admin", etc.

    @Column({ type: "json", nullable: true })
    preferences?: any; // User-specific preferences/settings.

    @OneToOne(() => User, (user) => user.account, { cascade: true })
    @JoinColumn()
    user!: User

}
