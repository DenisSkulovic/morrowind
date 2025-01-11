import { Serializable } from "../../common/decorator/serializable.decorator";
import { SerializeStrategyEnum } from "../../common/serializer/serializer";
import { DialogueAttitudeEnum } from "../../enum/DialogueAttitudeEnum";
import { CharacterGoals } from "./CharacterGoals";
import { CharacterInventory } from "./CharacterInventory";
import { CharacterKnowledge } from "./CharacterKnowledge";


export class CharacterProfile {
    @Serializable()
    id!: string;

    @Serializable()
    name!: string;

    @Serializable()
    race?: string;

    @Serializable()
    class?: string;

    @Serializable()
    traits?: string[];

    @Serializable()
    enneagram?: string;

    @Serializable()
    mood?: string;

    @Serializable()
    needs?: string[];

    @Serializable({ strategy: SerializeStrategyEnum.FULL })
    goals?: CharacterGoals;

    @Serializable()
    skills?: Record<string, number>;

    @Serializable()
    stats?: Record<string, string>;

    @Serializable({ strategy: SerializeStrategyEnum.FULL })
    inventory?: CharacterInventory;

    @Serializable({ strategy: SerializeStrategyEnum.FULL })
    knowledge?: CharacterKnowledge;

    @Serializable() // no need for serializeEnum, in proto it's just a string (for simplicity)
    dialogueAttitude?: DialogueAttitudeEnum;

    static validate(data: any) {
        // Validate required fields
        if (!data.id) throw new Error('CharacterProfile: id is required');
        if (!data.name) throw new Error('CharacterProfile: name is required');

        // Validate types
        if (typeof data.id !== 'string') throw new Error('CharacterProfile: id must be a string');
        if (typeof data.name !== 'string') throw new Error('CharacterProfile: name must be a string');
        if (data.race && typeof data.race !== 'string') throw new Error('CharacterProfile: race must be a string');
        if (data.class && typeof data.class !== 'string') throw new Error('CharacterProfile: class must be a string');
        if (data.dialogueAttitude && !Object.values(DialogueAttitudeEnum).includes(data.dialogueAttitude)) throw new Error('CharacterProfile: dialogueAttitude must be a valid DialogueAttitudeEnum value');
    }

    static build(data: any) {
        CharacterProfile.validate(data);
        const profile = new CharacterProfile();
        profile.id = data.id;
        profile.name = data.name;
        profile.race = data.race;
        profile.class = data.class;
        profile.dialogueAttitude = data.dialogueAttitude;
        profile.goals = data.goals ? CharacterGoals.build(data.goals) : undefined;
        profile.inventory = data.inventory ? CharacterInventory.build(data.inventory) : undefined;
        profile.knowledge = data.knowledge ? CharacterKnowledge.build(data.knowledge) : undefined;
        profile.skills = data.skills;
        profile.stats = data.stats;
        profile.traits = data.traits;
        profile.enneagram = data.enneagram;
        profile.mood = data.mood;
        profile.needs = data.needs;
        return profile;
    }
}