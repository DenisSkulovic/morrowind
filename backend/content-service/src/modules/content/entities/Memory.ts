import { Entity, TableInheritance, ManyToMany, Column, JoinTable, ManyToOne, PrimaryColumn } from "typeorm";
import { Fact } from "./Fact";
import { Tag } from "./Tag";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { CharacterMemoryDTO, ItemDTO, MemoryDTO, MemoryTypeEnumDTO } from "../../../proto/common";
import { Context } from "../../../types";
import { MemoryTypeEnum } from "../../../common/enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../../common/enum/util";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializer } from "../../../serializer";
import { CharacterMemory } from "./CharacterMemory";
import { Serializable } from "../../../decorator/serializable.decorator";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Memory extends TaggableContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    id_prefix = "MEMORY"

    @Column()
    @Serializable()
    name!: string;

    @Column({ nullable: true, default: null })
    @Serializable()
    description!: string

    @Column({ type: "enum", enum: MemoryTypeEnum }) // bad to have this default, but I dont have a better idea yet, need to come back to the types later
    @Serializable({
        serialize: (i) => serializeEnum(MemoryTypeEnumDTO, i),
        deserialize: (i) => deserializeEnum(MemoryTypeEnum, i)
    })
    type!: MemoryTypeEnum // TODO need to properly conceptualize types of memories and what that means. Maybe better to do it with tags?

    @ManyToMany(() => Fact, fact => fact.memories)
    @JoinTable()
    @Serializable({ strategy: 'full' })
    facts!: Fact[]

    @ManyToMany(() => Tag, (tag) => tag.memories)
    @Serializable({ strategy: 'id' })
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: 'id' })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: 'id' })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: 'id' })
    world!: World;

    public toDTO(): MemoryDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: MemoryDTO): Memory {
        const memory = new Memory();
        return Serializer.fromDTO(dto, memory);
    }
}