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
import { TagDTO, TagSubtypeEnumDTO } from "../../../proto/common";
import { Context } from "../../../types";
import { TagSubtypeEnum } from "../../../common/enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../../common/enum/util";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer } from "../../../serializer";


@Entity()
export class Tag extends ContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    idPrefix = "TAG"

    @Column({ type: "varchar", length: 30, unique: true })
    @Serializable()
    label!: string; // The tag's name (e.g., "dunmeri", "rare")

    @Column({ type: "enum", enum: Object.values(TagSubtypeEnum) })
    @Serializable()
    subtype!: string;

    @ManyToMany(() => Item, (i) => i.tags)
    @JoinTable()
    items?: Item[];

    @ManyToMany(() => PastExperience, (i) => i.tags)
    @JoinTable()
    pastExperiences?: PastExperience[];

    @ManyToMany(() => CharacterMemory, (i) => i.tags)
    @JoinTable()
    characterMemories?: CharacterMemory[];

    @ManyToMany(() => Memory, (i) => i.tags)
    @JoinTable()
    memories?: Memory[];

    @ManyToMany(() => MemoryPool, (i) => i.tags)
    @JoinTable()
    memoryPools?: MemoryPool[];

    @ManyToMany(() => Skill, (i) => i.tags)
    @JoinTable()
    skills?: Skill[];

    @ManyToMany(() => Trait, (i) => i.tags)
    @JoinTable()
    traits?: Trait[];

    @ManyToMany(() => Character, (i) => i.tags)
    @JoinTable()
    characters?: Character[];

    @ManyToMany(() => CharacterProfession, (i) => i.tags)
    @JoinTable()
    characterProfessions?: CharacterProfession[];

    @ManyToMany(() => Disease, (i) => i.tags)
    @JoinTable()
    diseases?: Disease[];

    @ManyToMany(() => Effect, (i) => i.tags)
    @JoinTable()
    effects?: Effect[];

    @ManyToMany(() => Fact, (i) => i.tags)
    @JoinTable()
    facts?: Fact[];

    @ManyToMany(() => Faction, (i) => i.tags)
    @JoinTable()
    factions?: Faction[];

    @ManyToOne(() => User, { nullable: true, })
    @Serializable({ strategy: 'id' })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true, })
    @Serializable({ strategy: 'id' })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true, })
    @Serializable({ strategy: 'id' })
    world!: World;

    public toDTO(): TagDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: TagDTO): Tag {
        const tag = new Tag();
        return Serializer.fromDTO(dto, tag);
    }
}