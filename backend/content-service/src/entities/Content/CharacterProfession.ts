import { Entity, Column, ManyToOne, ManyToMany, JoinTable, PrimaryColumn } from "typeorm";
import { MemoryPool } from "./Knowledge/MemoryPool";
import { Character } from "./Character";
import { TaggableContentBase } from "../../TaggableContentBase";
import { Tag } from "./Tag";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { CharacterProfessionDTO } from "../../proto/common";
import { Context } from "../../types";

@Entity()
export class CharacterProfession extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;

    id_prefix = "CHARACTER_PROFESSION"

    @ManyToMany(() => Character, character => character.professions, {})
    @JoinTable()
    characters?: Character[];

    @ManyToMany(() => MemoryPool, {})
    memoryPools!: MemoryPool[]

    @Column({ type: "varchar", length: 60 })
    name!: string; // E.g., "Fisherman", "Kwama Egg Miner", "Imperial Soldier"


    @ManyToMany(() => Tag, (tag) => tag.characterProfessions, {})
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true, })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true, })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true, })
    world!: World;

    public static toDTO(charProf: CharacterProfession): CharacterProfessionDTO {
        return {
            id: charProf.id,
            blueprintId: charProf.blueprint_id,
            characters: CharacterProfession.serializeEntityArray(charProf.characters, i => Character.toDTO(i)),
            memoryPools: CharacterProfession.serializeEntityArray(charProf.memoryPools, i => MemoryPool.toDTO(i)),
            name: charProf.name,
            tags: CharacterProfession.serializeEntityArray(charProf.tags, i => Tag.toDTO(i)),
            user: CharacterProfession.serializeEntity(charProf.user, i => User.toDTO(i)),
            campaign: CharacterProfession.serializeEntity(charProf.campaign, i => Campaign.toDTO(i)),
            world: CharacterProfession.serializeEntity(charProf.world, i => World.toDTO(i)),
            targetEntity: charProf.targetEntity
        };
    }

    public static fromDTO(dto: CharacterProfessionDTO, context: Context): CharacterProfession {
        const profession = new CharacterProfession();
        profession.id = dto.id;
        profession.characters = CharacterProfession.deserializeEntityArray(dto.characters, i => Character.fromDTO(i, context));
        profession.memoryPools = CharacterProfession.deserializeEntityArray(dto.memoryPools, i => MemoryPool.fromDTO(i, context));
        profession.name = dto.name;
        profession.tags = CharacterProfession.deserializeEntityArray(dto.tags, i => Tag.fromDTO(i, context));
        profession.user = context.user;
        profession.campaign = context.campaign;
        profession.world = context.world;
        profession.targetEntity = dto.targetEntity
        return profession;
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