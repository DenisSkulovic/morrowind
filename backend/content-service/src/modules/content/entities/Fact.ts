import { Entity, Column, ManyToMany, ManyToOne, PrimaryGeneratedColumn, BeforeInsert, PrimaryColumn } from "typeorm";
import { Tag } from "./Tag";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Memory } from "./Memory";
import { FactDTO } from "../../../proto/common";
import { Context } from "../../../types";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer } from "../../../serializer";

@Entity()
export class Fact extends TaggableContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    idPrefix = "FACT"

    @Column()
    @Serializable()
    name!: string

    @Column({ type: "text" })
    @Serializable()
    description!: string

    @Column()
    @Serializable()
    weight!: number // 1 to 20; How "objectively" important the fact is. For example Red Mountain eruption is 20, because its a global event, but to a farmer in Leyawiin it may be a 2 of personal importance of the memory as a whole. The larger the weight, the more you need to accumulate "decay" to forget it. Lower weight facts are forgotten quicker.

    @ManyToMany(() => Memory, memory => memory.facts, {})
    memories!: Memory[]

    @ManyToMany(() => Tag, (tag) => tag.facts, {})
    @Serializable({ strategy: 'id' })
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true, })
    @Serializable({ strategy: 'id' })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true, })
    @Serializable({ strategy: 'id' })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true, })
    @Serializable({ strategy: 'id' })
    world!: World;

    public toDTO(): FactDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: FactDTO): Fact {
        const fact = new Fact();
        return Serializer.fromDTO(dto, fact);
    }

}