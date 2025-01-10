import { Serializable } from "../../common/decorator/serializable.decorator";

export class CharacterGoals {
    @Serializable()
    satisfied!: string[];

    @Serializable()
    unsatisfied!: string[];

    @Serializable()
    clazz = 'CharacterGoals';

    static validate(data: any) {
        if (data.clazz !== 'CharacterGoals') throw new Error("Invalid class");
        if (!data.satisfied) throw new Error('CharacterGoals: satisfied is required');
        if (!data.unsatisfied) throw new Error('CharacterGoals: unsatisfied is required');
    }

    static build(data: any) {
        CharacterGoals.validate(data);
        const goals = new CharacterGoals();
        goals.satisfied = data.satisfied;
        goals.unsatisfied = data.unsatisfied;
        return goals;
    }
}