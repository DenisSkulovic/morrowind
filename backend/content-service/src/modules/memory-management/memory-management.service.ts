// TODO develop this idea further when I get to memories

import { Injectable } from "@nestjs/common";
import { CharacterMemory } from "../content/entities/CharacterMemory";

export interface IMemoryManagementService {
    reinforceMemory(charMemory: CharacterMemory): void
    decayMemory(charMemory: CharacterMemory): void
}

@Injectable()
export class MemoryManagementService implements IMemoryManagementService {

    constructor() { }

    public reinforceMemory(charMemory: CharacterMemory): void {
        throw new Error("NOT IMPLEMENTED")
        // const baseValue = 50; // Base reinforcement value
        // charMemory.accumulator += baseValue * charMemory.importance;

        // if (charMemory.accumulator >= 100) {
        //     charMemory.resistance += 30; // Increase resistance
        //     charMemory.accumulator = 0; // Reset accumulator
        // }

        // // Refresh clarity
        // charMemory.clarity = 100;
        // charMemory.lastReferencedAt = new Date();
    }

    public decayMemory(charMemory: CharacterMemory): void {
        throw new Error("NOT IMPLEMENTED")
        // const timeElapsed = getTimeSince(charMemory.lastReferencedAt || charMemory.acquiredAt);

        // // Decay clarity
        // const clarityDecayRate = 1 / (charMemory.resistance + 1); // Slower decay with higher resistance
        // charMemory.clarity -= timeElapsed * clarityDecayRate;

        // if (charMemory.clarity < 0) {
        //     charMemory.clarity = 0;
        // }

        // // Decay accumulator
        // const accumulatorDecayRate = 5; // Arbitrary value
        // charMemory.accumulator -= timeElapsed * accumulatorDecayRate;

        // if (charMemory.accumulator < 0) {
        //     charMemory.accumulator = 0;
        // }
    }

}

