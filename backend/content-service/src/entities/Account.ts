import { TableInheritance, Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, OneToOne, JoinColumn, BeforeInsert, PrimaryColumn } from "typeorm";
import { User } from "./User";
import { randomUUID } from "crypto";
import { AccountRoleEnum } from "../enum/AccountRoleEnum";
import { Base } from "../Base";
import { Context } from "../types";
import { AccountDTO } from "../proto/common";



@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Account extends Base {
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

    @Column({ type: "enum", enum: Object.values(AccountRoleEnum), nullable: true }) // TODO remove nullable because this is temporary. I need to add a value for entries that appear to be missing this
    role!: string;

    @Column({ type: "json", nullable: true })
    preferences?: any; // User-specific preferences/settings.

    @OneToOne(() => User, (user) => user.account, { cascade: true })
    @JoinColumn()
    user!: User


    public static toDTO(acc: Account): AccountDTO {
        return {
            id: acc.id,
            username: acc.username,
            email: acc.email,
            role: acc.role,
            preferences: acc.preferences,
            user: Account.serializeEntity(acc.user, (i) => User.toDTO(i)),
        };
    }

    public static fromDTO(dto: AccountDTO, context: Context): Account {
        const account = new Account();
        account.id = dto.id;
        account.username = dto.username;
        account.email = dto.email;
        account.role = dto.role;
        account.preferences = dto.preferences;
        account.user = context.user;
        return account;
    }
}
