import { TiktokenModel } from "tiktoken";
import { AiProviderImplementationEnum } from "../modules/ai/ai.service";

export const summarizeTopicAiProvider: AiProviderImplementationEnum = AiProviderImplementationEnum.OPENAI_V1;
export const summarizeTopicAiModel: TiktokenModel = "gpt-4o-mini";
export const summarizeTopicMaxTokens = 150;
export const summarizeTopicTemperature = 0.5;


export const analyzeAiResponseForOutcomesAiProvider: AiProviderImplementationEnum = AiProviderImplementationEnum.OPENAI_V1;
export const analyzeAiResponseForOutcomesAiModel: TiktokenModel = "gpt-4o-mini";
export const analyzeAiResponseForOutcomesMaxTokens = 150;
export const analyzeAiResponseForOutcomesTemperature = 0.5;


export const generateResponseOptionsAiProvider: AiProviderImplementationEnum = AiProviderImplementationEnum.OPENAI_V1;
export const generateResponseOptionsAiModel: TiktokenModel = "gpt-4o-mini";
export const generateResponseOptionsMaxTokens = 150;
export const generateResponseOptionsTemperature = 0.5;