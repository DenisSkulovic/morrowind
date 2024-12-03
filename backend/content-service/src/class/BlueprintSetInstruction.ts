import { BlueprintSetCombinator } from "./GenerationInstruction";

export class BlueprintSetInstruction {
    constructor(
        public blueprintId: string,
        public set: BlueprintSetCombinator
    ) { }
}
export type BlueprintSetInstructions = BlueprintSetInstruction[]
