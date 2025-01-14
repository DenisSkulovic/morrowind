import { JoinTable, Entity, Column, OneToMany, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { CharacterMemory } from "./CharacterMemory";
import { MemoryPool } from "./MemoryPool";
import { Trait } from "./Trait";
import { CharacterProfession } from "./CharacterProfession";
import { Birthsign } from "./Birthsign";
import { Race } from "./Race";
import { Tag } from "./Tag";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Faction } from "./Faction";
import { Disease } from "./Disease";
import { Addiction } from "./Addiction";
import { EquipmentSlot } from "./Slot/EquipmentSlot";
import { CharacterDTO, GenderEnumDTO } from "../../../proto/entities";
import { GenderEnum } from "../../../common/enum/GenderEnum";
import { serializeEnum, deserializeEnum } from "../../../common/enum/util";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";
import { Serializable } from "../../../decorator/serializable.decorator";
import { PastExperience } from "./PastExperience";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';



// lazy loading means when I need to access traits of a character, it will perform 2 queries. 
// One to fetch the character, and a second one to fetch inventories, but only when I access that field.
// If I know from the start that I will need the inventories, I can use eager loading:
// const character = await characterRepository.findOne({
//     where: { id: 1 },
//     relations: ['inventories'], // Load inventories in the same query
// });


@Entity()
@GQLObjectType({ implements: TaggableContentBase })
export class Character extends TaggableContentBase {
    @PrimaryColumn()
    @GQLField(() => GQLID)
    @Serializable()
    id!: string;

    idPrefix = "CHARACTER"

    @Column({ type: "varchar", length: 255 })
    @GQLField()
    @Serializable()
    firstName!: string;

    @Column({ type: "varchar", length: 255 })
    @GQLField()
    @Serializable()
    lastName!: string;

    @ManyToOne(() => Race)
    @GQLField(() => Race)
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    race!: Race;

    @Column({ type: "enum", enum: Object.values(GenderEnum) })
    @GQLField(() => GenderEnum)
    @Serializable({
        serialize: (i) => serializeEnum(GenderEnum, GenderEnumDTO, i),
        deserialize: (i) => deserializeEnum(GenderEnumDTO, GenderEnum, i)
    })
    gender!: GenderEnum;

    @ManyToOne(() => Birthsign)
    @GQLField(() => Birthsign, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    birthsign?: Birthsign;

    @Column({ default: null, nullable: true })
    @GQLField()
    @Serializable()
    birthEra?: string;

    @Column({ default: null, nullable: true })
    @GQLField()
    @Serializable()
    birthYear?: number;

    @Column({ default: null, nullable: true })
    @GQLField()
    @Serializable()
    birthMonth?: string;

    @Column({ default: null, nullable: true })
    @GQLField()
    @Serializable()
    birthDay?: number;

    @Column("jsonb", { default: {} })
    @GQLField()
    @Serializable()
    skills!: { [skill: string]: number };

    @OneToMany(() => EquipmentSlot, eqiupmentSlot => eqiupmentSlot.character)
    @JoinTable()
    @GQLField(() => [EquipmentSlot])
    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: EquipmentSlot })
    equipmentSlots!: EquipmentSlot[];

    @ManyToMany(() => CharacterProfession, profession => profession.characters)
    @GQLField(() => [CharacterProfession])
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    professions!: CharacterProfession[];

    @ManyToMany(() => MemoryPool)
    @JoinTable()
    @GQLField(() => [MemoryPool])
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    memoryPools!: MemoryPool[];

    @OneToMany(() => CharacterMemory, charMemory => charMemory.character)
    @GQLField(() => [CharacterMemory])
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    characterMemories!: CharacterMemory[];

    @Column({ type: "varchar", length: 3 })
    @GQLField()
    @Serializable()
    enneagramType!: string;

    @ManyToMany(() => Trait)
    @JoinTable()
    @GQLField(() => [Trait])
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    traits!: Trait[];

    @ManyToMany(() => Disease)
    @JoinTable()
    @GQLField(() => [Disease])
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    diseases?: Disease[];

    @ManyToMany(() => Addiction)
    @JoinTable()
    @GQLField(() => [Addiction])
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    addictions?: Addiction[];

    @ManyToMany(() => PastExperience)
    @JoinTable()
    @GQLField(() => [PastExperience])
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    pastExperiences?: PastExperience[];

    @ManyToMany(() => Faction, (faction) => faction.characters)
    @JoinTable()
    @GQLField(() => [Faction])
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    factions?: Faction[];

    @ManyToMany(() => Tag, (tag) => tag.characters)
    @JoinTable()
    @GQLField(() => [Tag])
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    tags?: Tag[];

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

    public toDTO(): CharacterDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: CharacterDTO): Character {
        return Serializer.fromDTO(dto, new Character());
    }
}
