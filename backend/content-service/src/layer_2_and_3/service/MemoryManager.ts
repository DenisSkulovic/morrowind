import {CharacterMemory} from "../../entities/Content/Knowledge/CharacterMemory"

// TODO develop this idea further when I get to memories

// function reinforceMemory(charMemory: CharacterMemory) {
//     const baseValue = 50; // Base reinforcement value
//     charMemory.accumulator += baseValue * charMemory.importance;

//     if (charMemory.accumulator >= 100) {
//         charMemory.resistance += 30; // Increase resistance
//         charMemory.accumulator = 0; // Reset accumulator
//     }

//     // Refresh clarity
//     charMemory.clarity = 100;
//     charMemory.lastReferencedAt = new Date();
// }

// function decayMemory(charMemory: CharacterMemory) {
//     const timeElapsed = getTimeSince(charMemory.lastReferencedAt || charMemory.acquiredAt);

//     // Decay clarity
//     const clarityDecayRate = 1 / (charMemory.resistance + 1); // Slower decay with higher resistance
//     charMemory.clarity -= timeElapsed * clarityDecayRate;

//     if (charMemory.clarity < 0) {
//         charMemory.clarity = 0;
//     }

//     // Decay accumulator
//     const accumulatorDecayRate = 5; // Arbitrary value
//     charMemory.accumulator -= timeElapsed * accumulatorDecayRate;

//     if (charMemory.accumulator < 0) {
//         charMemory.accumulator = 0;
//     }
// }
