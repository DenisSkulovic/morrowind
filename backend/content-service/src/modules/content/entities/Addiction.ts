import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { Character } from "./Character";
import { ManyToMany } from "typeorm";
import { AddictionDTO } from "../../../proto/common";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializer } from "../../../serializer";
import { Serializable } from "../../../decorator/serializable.decorator";

@Entity()
export class Addiction extends ContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    idPrefix = "ADDICTION"

    @Column()
    @Serializable()
    name!: string

    @ManyToMany(() => Character, {})
    characters!: Character[];

    @ManyToOne(() => User, { nullable: true, })
    @Serializable({ strategy: 'id' })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true, })
    @Serializable({ strategy: 'id' })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true, })
    @Serializable({ strategy: 'id' })
    world!: World;

    public toDTO(): AddictionDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: AddictionDTO): Addiction {
        const addiction = new Addiction();
        return Serializer.fromDTO(dto, addiction);
    }
}