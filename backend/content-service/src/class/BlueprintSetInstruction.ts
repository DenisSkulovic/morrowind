import { BlueprintSetCombinator } from "./GenerationInstruction";

export class BlueprintSetInstruction {
    constructor(
        public blueprint_id: string,
        public set: BlueprintSetCombinator
    ) { }
}
export type BlueprintSetInstructions = BlueprintSetInstruction[]
