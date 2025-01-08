import { TiktokenModel } from "tiktoken";
import { AiProviderImplementationEnum } from "../modules/ai/ai.service";

const allowedModels: TiktokenModel[] = [
    "gpt-3.5-turbo",
    "gpt-4o-mini",
];
type AllowedModel = typeof allowedModels[number];


export interface AiConfig {
    allowedModels: AllowedModel[];
    useCases: {
        [useCase: string]: AiUseCaseConfig;
    }
}
export interface AiUseCaseConfig {
    aiProvider: AiProviderImplementationEnum;
    aiModel: AllowedModel;
    maxTokens?: number;
    temperature: number;
}

export const aiConfig: AiConfig = {
    allowedModels,
    useCases: {
        summarizeTopic: {
            aiProvider: AiProviderImplementationEnum.OPENAI_V1,
            aiModel: "gpt-4o-mini",
            maxTokens: 150,
            temperature: 0.5,
        },
        summarizeDialogue: {
            aiProvider: AiProviderImplementationEnum.OPENAI_V1,
            aiModel: "gpt-4o-mini",
            maxTokens: 150,
            temperature: 0.5,
        },
        analyzeAiResponseForActionsTaken: {
            aiProvider: AiProviderImplementationEnum.OPENAI_V1,
            aiModel: "gpt-4o-mini",
            maxTokens: 150,
            temperature: 0.3,
        },
        analyzeAiResponseForGoalsFulfilled: {
            aiProvider: AiProviderImplementationEnum.OPENAI_V1,
            aiModel: "gpt-4o-mini",
            maxTokens: 150,
            temperature: 0.3,
        },
        generatePlayerDialogueDirections: {
            aiProvider: AiProviderImplementationEnum.OPENAI_V1,
            aiModel: "gpt-4o-mini",
            maxTokens: 150,
            temperature: 0.8,
        },
        generatePlayerDialogueOptions: {
            aiProvider: AiProviderImplementationEnum.OPENAI_V1,
            aiModel: "gpt-4o-mini",
            maxTokens: 150,
            temperature: 0.8,
        },
        getAiDialogueDirectionDecision: {
            aiProvider: AiProviderImplementationEnum.OPENAI_V1,
            aiModel: "gpt-4o-mini",
            maxTokens: 150,
            temperature: 0.8,
        },
        progressDialogue: {
            aiProvider: AiProviderImplementationEnum.OPENAI_V1,
            aiModel: "gpt-3.5-turbo",
            temperature: 0.8,
        },
    }
};
