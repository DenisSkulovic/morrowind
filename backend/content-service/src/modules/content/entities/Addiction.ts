import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { Character } from "./Character";
import { ManyToMany } from "typeorm";
import { AddictionDTO } from "../../../proto/common";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";
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
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true, })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true, })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    world!: World;

    public toDTO(): AddictionDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: AddictionDTO): Addiction {
        return Serializer.fromDTO(dto, new Addiction());
    }
}