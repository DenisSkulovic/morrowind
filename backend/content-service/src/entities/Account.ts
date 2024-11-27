import { TableInheritance, Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, OneToOne, JoinColumn, BeforeInsert, PrimaryColumn } from "typeorm";
import { User } from "./User";
import { randomUUID } from "crypto";

export enum AccountRoleEnum {
    PLAYER = "player",
    ADMIN = "admin"
}

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Account extends BaseEntity {
    // @PrimaryGeneratedColumn("uuid")
    // id!: string;
    @PrimaryColumn()
    id!: string;

    @BeforeInsert()
    generateId() {
        this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
    }
    id_prefix = "ACCOUNT";

    @Column({ unique: true })
    username!: string; // Unique username.

    @Column({ type: "varchar", length: 255 })
    password_hash!: string; // Hashed password for authentication.

    @Column({ type: "varchar", length: 255, nullable: true })
    email!: string; // Optional email for communication and recovery.

    @Column({ type: "enum", enum: [AccountRoleEnum.ADMIN, AccountRoleEnum.PLAYER], nullable:true}) // TODO remove nullable because this is temporary. I need to add a value for entries that appear to be missing this
    role!: string;

    @Column({ type: "json", nullable: true })
    preferences?: any; // User-specific preferences/settings.

    @OneToOne(() => User, (user) => user.account, { cascade: true, lazy: true })
    @JoinColumn()
    user!: User

}
