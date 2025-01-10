import { DiceRollResult } from "./class/DiceRollResult";
import { DICE_OUTCOME_ENUM } from "./enum/DICE_OUTCOME_ENUM";
import { SCALE_RISK_IMPACT_ENUM } from "./enum/SCALE_RISK_IMPACT_ENUM";
import { DiceScaleConfig } from "./types";

/**
 * Roll a dice with a given scale and custom sides
 * @param scale - The scale to use for the dice roll
 * @param scaleType - The type of scale to use for the dice roll
 * @returns The result of the dice roll
 */
export function rollDice(
    scale: DiceScaleConfig,
    scaleType?: SCALE_RISK_IMPACT_ENUM,
): DiceRollResult {
    const sides = scale.sides

    // Roll the dice
    const roll = Math.floor(Math.random() * (sides || 20)) + 1;

    // If no scale provided, return just the roll
    if (!scaleType) {
        return DiceRollResult.build({ roll, scaleType });
    }

    // Get the scale mapping for the provided scale type
    const scaleMapping = scale.items[scaleType];

    // Find matching outcome based on roll
    let matchedOutcome: DICE_OUTCOME_ENUM | undefined;
    for (const [outcome, range] of Object.entries(scaleMapping)) {
        if (!range) continue;

        // Handle single number case
        if (!range.includes('-')) {
            if (roll === parseInt(range)) {
                matchedOutcome = outcome as DICE_OUTCOME_ENUM;
                break;
            }
            continue;
        }

        // Handle range case
        const [min, max] = range.split('-').map(num => parseInt(num));
        if (roll >= min && roll <= max) {
            matchedOutcome = outcome as DICE_OUTCOME_ENUM;
            break;
        }
    }

    return DiceRollResult.build({
        roll,
        outcome: matchedOutcome,
        scaleType
    });
}