import { TableInheritance, Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, OneToOne, JoinColumn, BeforeInsert, PrimaryColumn } from "typeorm";
import { User } from "./User";
import { randomUUID } from "crypto";
import { AccountDTO } from "../proto/account";
import { AccountRoleEnum } from "../enum/AccountRoleEnum";



@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Account extends BaseEntity {
    public toDTO(): AccountDTO {
        return {
            id: this.id,
            username: this.username,
            email: this.email,
            role: this.role,
            preferences: this.preferences,
            user: this.user?.toDTO(),
        };
    }
    
    public static fromDTO(dto: AccountDTO, user: User): Account {
        const account = new Account();
        account.id = dto.id;
        account.username = dto.username;
        account.email = dto.email;
        account.role = dto.role;
        account.preferences = dto.preferences;
        account.user = user;
        return account;
    }
    
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

    @Column({ type: "enum", enum: Object.values(AccountRoleEnum), nullable:true}) // TODO remove nullable because this is temporary. I need to add a value for entries that appear to be missing this
    role!: string;

    @Column({ type: "json", nullable: true })
    preferences?: any; // User-specific preferences/settings.

    @OneToOne(() => User, (user) => user.account, { cascade: true, lazy: true })
    @JoinColumn()
    user!: User

}
