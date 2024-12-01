import { Entity, TableInheritance, ManyToMany, Column, JoinTable, ManyToOne, PrimaryColumn } from "typeorm";
import { Fact } from "../Fact";
import { Tag } from "../Tag";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";
import { MemoryDTO, MemoryTypeEnumDTO } from "../../../proto/common";
import { MemoryTypeEnum } from "../../../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../../enum/util";
import { Context } from "../../../types";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Memory extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;

    id_prefix = "MEMORY"

    @Column()
    name!: string;

    @Column({ nullable: true, default: null })
    description!: string

    @Column({ type: "enum", enum: Object.values(MemoryTypeEnum) }) // bad to have this default, but I dont have a better idea yet, need to come back to the types later
    type!: string // TODO need to properly conceptualize types of memories and what that means. Maybe better to do it with tags?

    @ManyToMany(() => Fact, fact => fact.memories)
    @JoinTable()
    facts!: Fact[]


    @ManyToMany(() => Tag, (tag) => tag.memories)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public static toDTO(mem: Memory): MemoryDTO {
        return {
            id: mem.id,
            blueprintId: mem.blueprint_id,
            name: mem.name,
            description: mem.description,
            type: serializeEnum(MemoryTypeEnum, mem.type),
            facts: Memory.serializeEntityArray(mem.facts, i => Fact.toDTO(i)),
            tags: Memory.serializeEntityArray(mem.tags, i => Tag.toDTO(i)),
            user: Memory.serializeEntity(mem.user, i => User.toDTO(i)),
            campaign: Memory.serializeEntity(mem.campaign, i => Campaign.toDTO(i)),
            world: Memory.serializeEntity(mem.world, i => World.toDTO(i)),
            targetEntity: mem.targetEntity
        };
    }

    public static fromDTO(dto: MemoryDTO, context: Context): Memory {
        const memory = new Memory();
        memory.id = dto.id;
        memory.description = dto.description;
        memory.type = deserializeEnum(MemoryTypeEnumDTO, dto.type);
        memory.facts = Memory.deserializeEntityArray(dto.facts, i => Fact.fromDTO(i, context));
        memory.tags = Memory.deserializeEntityArray(dto.tags, i => Tag.fromDTO(i, context));
        memory.user = context.user;
        memory.campaign = context.campaign;
        memory.world = context.world;
        memory.targetEntity = dto.targetEntity
        return memory;
    }
}