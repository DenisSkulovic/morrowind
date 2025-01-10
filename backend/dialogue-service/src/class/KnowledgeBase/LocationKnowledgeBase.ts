import { Serializable } from "../../common/decorator/serializable.decorator";

export class LocationKnowledgeBase {
    @Serializable()
    id!: string;

    @Serializable()
    name!: string;

    @Serializable()
    description!: string;

    @Serializable()
    parentLocationChain!: string;

    @Serializable()
    clazz = 'LocationKnowledgeBase';

    static validate(data: any) {
        if (data.clazz !== 'LocationKnowledgeBase') throw new Error("Invalid class");
        // Validate required fields
        if (!data.id) throw new Error('LocationKnowledgeBase: id is required');
        if (!data.name) throw new Error('LocationKnowledgeBase: name is required');
        if (!data.description) throw new Error('LocationKnowledgeBase: description is required');
        if (!data.parentLocationChain) throw new Error('LocationKnowledgeBase: parentLocationChain is required');

        // Validate types
        if (typeof data.id !== 'string') throw new Error('LocationKnowledgeBase: id must be a string');
        if (typeof data.name !== 'string') throw new Error('LocationKnowledgeBase: name must be a string');
        if (typeof data.description !== 'string') throw new Error('LocationKnowledgeBase: description must be a string');
        if (typeof data.biome !== 'string') throw new Error('LocationKnowledgeBase: biome must be a string');
    }

    static build(data: any) {
        LocationKnowledgeBase.validate(data);
        const state = new LocationKnowledgeBase();
        Object.assign(state, data);
        return state;
    }
}