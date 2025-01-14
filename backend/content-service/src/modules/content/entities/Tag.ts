import { Entity, Column, ManyToMany, ManyToOne, JoinTable, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { Item } from "./Item/Item";
import { PastExperience } from "./PastExperience";
import { CharacterMemory } from "./CharacterMemory";
import { Memory } from "./Memory";
import { MemoryPool } from "./MemoryPool";
import { Skill } from "./Skill/Skill";
import { Trait } from "./Trait";
import { Character } from "./Character";
import { CharacterProfession } from "./CharacterProfession";
import { Disease } from "./Disease";
import { Effect } from "./Effect";
import { Fact } from "./Fact";
import { Faction } from "./Faction";
import { TagDTO, TagSubtypeEnumDTO } from "../../../proto/entities";
import { TagSubtypeEnum } from "../../../common/enum/entityEnums";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@Entity()
@GQLObjectType({ implements: ContentBase })
export class Tag extends ContentBase {
    @PrimaryColumn()
    @GQLField(() => GQLID)
    @Serializable()
    id!: string;

    idPrefix = "TAG"

    @Column({ type: "varchar", length: 30, unique: true })
    @GQLField()
    @Serializable()
    label!: string; // The tag's name (e.g., "dunmeri", "rare")

    @Column({ type: "enum", enum: Object.values(TagSubtypeEnum) })
    @GQLField(() => TagSubtypeEnum)
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: TagSubtypeEnum, protoEnum: TagSubtypeEnumDTO })
    subtype!: string;

    @ManyToMany(() => Item, (i) => i.tags)
    @JoinTable()
    @GQLField(() => [Item])
    items?: Item[];

    @ManyToMany(() => PastExperience, (i) => i.tags)
    @JoinTable()
    @GQLField(() => [PastExperience])
    pastExperiences?: PastExperience[];

    @ManyToMany(() => CharacterMemory, (i) => i.tags)
    @JoinTable()
    @GQLField(() => [CharacterMemory])
    characterMemories?: CharacterMemory[];

    @ManyToMany(() => Memory, (i) => i.tags)
    @JoinTable()
    @GQLField(() => [Memory])
    memories?: Memory[];

    @ManyToMany(() => MemoryPool, (i) => i.tags)
    @JoinTable()
    @GQLField(() => [MemoryPool])
    memoryPools?: MemoryPool[];

    @ManyToMany(() => Skill, (i) => i.tags)
    @JoinTable()
    @GQLField(() => [Skill])
    skills?: Skill[];

    @ManyToMany(() => Trait, (i) => i.tags)
    @JoinTable()
    @GQLField(() => [Trait])
    traits?: Trait[];

    @ManyToMany(() => Character, (i) => i.tags)
    @JoinTable()
    @GQLField(() => [Character])
    characters?: Character[];

    @ManyToMany(() => CharacterProfession, (i) => i.tags)
    @JoinTable()
    @GQLField(() => [CharacterProfession])
    characterProfessions?: CharacterProfession[];

    @ManyToMany(() => Disease, (i) => i.tags)
    @JoinTable()
    @GQLField(() => [Disease])
    diseases?: Disease[];

    @ManyToMany(() => Effect, (i) => i.tags)
    @JoinTable()
    @GQLField(() => [Effect])
    effects?: Effect[];

    @ManyToMany(() => Fact, (i) => i.tags)
    @JoinTable()
    @GQLField(() => [Fact])
    facts?: Fact[];

    @ManyToMany(() => Faction, (i) => i.tags)
    @JoinTable()
    @GQLField(() => [Faction])
    factions?: Faction[];

    @ManyToOne(() => User, { nullable: true, })
    @GQLField(() => User, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true, })
    @GQLField(() => Campaign, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true, })
    @GQLField(() => World, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    world!: World;

    public toDTO(): TagDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: TagDTO): Tag {
        return Serializer.fromDTO(dto, new Tag());
    }
}