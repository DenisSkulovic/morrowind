import { DiceThrowResult } from "./class/DiceThrowResult";
import { D20_scales } from "./D20_scales";
import { D20_OUTCOME_ENUM } from "./enum/D20_OUTCOME_ENUM";
import { D20_SCALE_TYPE_ENUM } from "./enum/D20_SCALE_TYPE_ENUM";

/**
 * Roll a dice with a given scale and custom sides
 * @param scale - The scale to use for the dice roll
 * @param customSides - The number of sides to use for the dice roll
 * @returns The result of the dice roll
 */
export function rollDice(
    scaleType?: D20_SCALE_TYPE_ENUM,
    customSides?: number,
): DiceThrowResult {
    const sides = customSides || 20;

    // Roll the dice
    const roll = Math.floor(Math.random() * (sides || 20)) + 1;

    // If no scale provided or not D20, return just the roll
    if (!scaleType || sides !== 20) {
        return DiceThrowResult.build({ roll, scaleType });
    }

    // Get the scale mapping for the provided scale type
    const scaleMapping = D20_scales[scaleType];

    // Find matching outcome based on roll
    let matchedOutcome: D20_OUTCOME_ENUM | undefined;
    for (const [outcome, range] of Object.entries(scaleMapping)) {
        if (!range) continue;

        // Handle single number case
        if (!range.includes('-')) {
            if (roll === parseInt(range)) {
                matchedOutcome = outcome as D20_OUTCOME_ENUM;
                break;
            }
            continue;
        }

        // Handle range case
        const [min, max] = range.split('-').map(num => parseInt(num));
        if (roll >= min && roll <= max) {
            matchedOutcome = outcome as D20_OUTCOME_ENUM;
            break;
        }
    }

    return DiceThrowResult.build({
        roll,
        outcome: matchedOutcome,
        scaleType
    });
}