import { DialogueOption } from ".";
import { Serializable } from "../../common/decorator/serializable.decorator";
import { SerializeStrategyEnum } from "../../common/serializer/serializer";

export class ChanceDialogueOption {
    @Serializable()
    chance!: number;

    @Serializable({ strategy: SerializeStrategyEnum.FULL })
    option!: DialogueOption;

    @Serializable()
    clazz = "ChanceDialogueOption";

    static validate(data: any) {
        if (data.clazz !== "ChanceDialogueOption") throw new Error('Invalid class');
        if (typeof data.chance !== 'number' || data.chance < 0 || data.chance > 100) throw new Error('ChanceDialogueOption: chance must be a number between 0 and 100');
        if (!data.option) throw new Error('ChanceDialogueOption: option is required');
    }

    static build(data: any) {
        ChanceDialogueOption.validate(data);
        const state = new ChanceDialogueOption();
        Object.assign(state, data);
        return state;
    }

    static selectOptionByProbability(options: ChanceDialogueOption[]): ChanceDialogueOption {
        // Calculate the total weight
        const totalWeight = options.reduce((sum, option) => sum + option.chance, 0);

        // Generate a random number between 0 and total weight
        const randomWeight = Math.random() * totalWeight;

        // Select the option based on the random weight
        let cumulativeWeight = 0;
        for (const option of options) {
            cumulativeWeight += option.chance;
            if (randomWeight <= cumulativeWeight) {
                return option;
            }
        }

        // Fallback: in case the loop does not return (shouldn't happen if input is valid)
        throw new Error('No valid option was selected. Ensure options are configured correctly.');
    }
}