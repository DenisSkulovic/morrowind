import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { Character } from "./Character";
import { ManyToMany } from "typeorm";
import { AddictionDTO } from "../../../proto/common";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializer } from "../../../serializer";

@Entity()
export class Addiction extends ContentBase {
    @PrimaryColumn()
    id!: string;

    idPrefix = "ADDICTION"

    @Column()
    name!: string

    @ManyToMany(() => Character, {})
    characters!: Character[];

    @ManyToOne(() => User, { nullable: true, })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true, })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true, })
    world!: World;

    public toDTO(): AddictionDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: AddictionDTO): Addiction {
        const addiction = new Addiction();
        return Serializer.fromDTO(dto, addiction);
    }
}