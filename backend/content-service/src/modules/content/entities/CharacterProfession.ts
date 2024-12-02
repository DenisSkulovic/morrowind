import { Entity, Column, ManyToOne, ManyToMany, JoinTable, PrimaryColumn } from "typeorm";
import { MemoryPool } from "./MemoryPool";
import { Character } from "./Character";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "./Tag";
import { CharacterProfessionDTO } from "../../../proto/common";
import { Context } from "../../../types";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer } from "../../../serializer";

@Entity()
export class CharacterProfession extends TaggableContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    id_prefix = "CHARACTER_PROFESSION"

    @ManyToMany(() => Character, character => character.professions, {})
    @JoinTable()
    @Serializable({ strategy: 'id' })
    characters?: Character[];

    @ManyToMany(() => MemoryPool, {})
    @Serializable({ strategy: 'id' })
    memoryPools!: MemoryPool[]

    @Column({ type: "varchar", length: 60 })
    @Serializable()
    name!: string; // E.g., "Fisherman", "Kwama Egg Miner", "Imperial Soldier"


    @ManyToMany(() => Tag, (tag) => tag.characterProfessions, {})
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


    public toDTO(): CharacterProfessionDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: CharacterProfessionDTO): CharacterProfession {
        const chProfession = new CharacterProfession();
        return Serializer.fromDTO(dto, chProfession);
    }
}

// example: Fisherman (Beginner). Beginner here would be represented by a tag, and specific memory pools will be connected. On generation, certain memories will be created, but after generation memories begin a free float.

// Fisherman (Beginner)
// Fisherman (Novice)
// Fisherman (Expert)
// Fisherman (Master)

// These would be 4 different professions with different memory pools.
// So lets say when a character changes profession from Fisherman (Beginner) to Fisherman (Novice), they gain access to a different memory pool set and dont immediately learn everything there, but instead start gaining the knowledge as ticks go by, simulating progress in mastery.
// And lets say a character gains a profession, Fisherman (Beginner). They start to slowly go from 0 knowledge to an equilibrium.
// And if its the player character, they would have to either gain direct experience, talk to someone, read a book, etc., to progress with the knowledge in the memory pools.
// Progressing to the next step happens when required memories become very ingrained and resistant. That shows a level of mastery and ability to progress to next mastery level in the profession.
// Profession means both knowledge and skills?...