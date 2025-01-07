import { TiktokenModel } from "tiktoken";

export class AiRequestOptionsV1 {
    aiModel!: TiktokenModel;
    temperature!: number;
    maxTokens!: number;
    timeout!: number;

    static validate(body: any): void {
        // validate mandatory fields
        if (!body.aiModel) throw new Error("AI model is required");
        if (!body.temperature) throw new Error("Temperature is required");
        if (!body.maxTokens) throw new Error("Max tokens is required");
        if (!body.timeout) throw new Error("Timeout is required");

        // validate types
        if (typeof body.aiModel !== 'string') throw new Error("AI model must be a string");
        if (typeof body.temperature !== 'number') throw new Error("Temperature must be a number");
        if (typeof body.maxTokens !== 'number') throw new Error("Max tokens must be a number");
        if (typeof body.timeout !== 'number') throw new Error("Timeout must be a number");

        if (!["gpt-3.5-turbo", "gpt-4o-mini"].includes(body.aiModel)) throw new Error("AI model must be either 'gpt-3.5-turbo' or 'gpt-4o-mini'. Others are too expensive to play with, my dude.");
    }

    static build(body: any): AiRequestOptionsV1 {
        AiRequestOptionsV1.validate(body);
        const options = new AiRequestOptionsV1();
        Object.assign(options, body);
        return options;
    }
}