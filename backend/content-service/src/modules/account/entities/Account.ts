import { TableInheritance, Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, OneToOne, JoinColumn, BeforeInsert, PrimaryColumn } from "typeorm";
import { User } from "../../user/entities/User";
import { randomUUID } from "crypto";
import { AccountRoleEnum } from "../../../common/enum/AccountRoleEnum";
import { Base } from "../../../Base";
import { Context } from "../../../types";
import { AccountDTO } from "../../../proto/common";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer } from "../../../serializer";



@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Account extends Base {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    @BeforeInsert()
    generateId() {
        this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
    }
    id_prefix = "ACCOUNT";

    @Column({ unique: true })
    @Serializable()
    username!: string; // Unique username.

    @Column({ type: "varchar", length: 255 })
    password_hash!: string; // Hashed password for authentication.

    @Column({ type: "varchar", length: 255, nullable: true })
    @Serializable()
    email!: string; // Optional email for communication and recovery.

    @Column({ type: "enum", enum: Object.values(AccountRoleEnum), nullable: true }) // TODO remove nullable because this is temporary. I need to add a value for entries that appear to be missing this
    @Serializable()
    role!: string;

    @Column({ type: "json", nullable: true })
    preferences?: any; // User-specific preferences/settings.

    @OneToOne(() => User, (user) => user.account, { cascade: true })
    @JoinColumn()
    @Serializable({ strategy: 'id' })
    user!: User


    public toDTO(): AccountDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: AccountDTO): Account {
        const account = new Account();
        return Serializer.fromDTO(dto, account);
    }
}
