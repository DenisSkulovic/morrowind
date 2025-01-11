import { Serializable } from "../../../../decorator/serializable.decorator";

export class CharacterGoals {
    @Serializable()
    satisfied?: string[];

    @Serializable()
    unsatisfied?: string[];

    @Serializable()
    clazz = 'CharacterGoals';

    static validate(data: Partial<CharacterGoals>) {
        // Validate required fields
        if (data.clazz !== 'CharacterGoals') throw new Error("Invalid class");
        if (!data.satisfied) throw new Error('CharacterGoals: satisfied is required');
        if (!data.unsatisfied) throw new Error('CharacterGoals: unsatisfied is required');

        // Validate types
        if (data.satisfied && !(data.satisfied instanceof Array)) throw new Error('CharacterGoals: satisfied must be an array');
        if (data.unsatisfied && !(data.unsatisfied instanceof Array)) throw new Error('CharacterGoals: unsatisfied must be an array');
    }

    static build(data: any) {
        CharacterGoals.validate(data);
        const goals = new CharacterGoals();
        goals.satisfied = data.satisfied;
        goals.unsatisfied = data.unsatisfied;
        return goals;
    }
}