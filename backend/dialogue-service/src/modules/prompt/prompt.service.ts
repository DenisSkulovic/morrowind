import { Injectable, Logger } from '@nestjs/common';
import { DialogueHistoryTopic } from '../../class/DialogueHistory/DialogueHistoryTopic';
import { SCALE_TYPE_ENUM } from '../../dnd/enum/SCALE_TYPE_ENUM';
import { CharacterProfile } from '../../class/CharacterProfile';
import { DialogueHistory } from '../../class/DialogueHistory';
import { DiceRollResult } from '../../dnd/class/DiceRollResult';
import { DialogueDirectionEnum } from '../../enum/DialogueDirectionEnum';
import { WorldContext } from '../../class/WorldContext';
import { KnowledgeBase } from '../../class/KnowledgeBase';
import { DialogueOption } from '../../class/DialogueOption';
import { DiceScaleConfig } from '../../dnd/types';

@Injectable()
export class PromptService {
    private readonly logger = new Logger(PromptService.name);

    public assembleProgressDialoguePrompt(
        playerCharacterId: string,
        selectedPlayerDialogueOption: DialogueOption,
        selectedAiDialogueOption: DialogueOption,
        playerResponseDiceResult: DiceRollResult,
        dialogueParticipants: CharacterProfile[],
        dialogueHistory: DialogueHistory,
        knowledgeBase: KnowledgeBase,
        worldContext: WorldContext,
    ): string {
        const playerCharacter: CharacterProfile | undefined = dialogueParticipants.find((participant) => participant.id === playerCharacterId);
        const aiCharacters: CharacterProfile[] = dialogueParticipants.filter((participant) => participant.id !== playerCharacterId);
        if (!playerCharacter) throw new Error('Player character not found');
        if (aiCharacters.length === 0) throw new Error('No AI characters found');
        return `

            Instruction: 
                You are roleplaying as the following character(s): ${aiCharacters.map((character) => `${character.name} (${character.id})`).join(', ')},
                in a dialogue with ${playerCharacter.name} (${playerCharacter.id}).
                You must embody your character(s) with their unique traits, needs, moods, etc, as listed in the data.
                You must respond based on the knowledge your character has, or doesn't have (like when the player asks for something your character does not know, you must convincingly act out that you do not know, etc.).
                Your character may not want to share something, or talk about something. Or they may want to.
                You can behave any way you want, to reply to the player or not. Do whatever would be in the character of this person that you embody.
                You have full power of will. First, voice the player character, then reply to the player.
                You need to prioritize roleplaying as your character(s), and that means you will have to disagree with the player when needed, be antagonistic, manipulative, secretive, etc., or to the contrary. You must do whatever you can to be a perfect embodiment of the character(s) you are roleplaying as.
                You must be a good roleplayer, and that means you must be able to act out the character's traits, needs, moods, etc.
                You must be able to act out the character's knowledge, or lack thereof.
                Your character may have unfulfilled goals for this dialogue, so they may want to pursue these to fulfill, all in accordance with the personality they have.
                You must be able to act out the character's actions, or lack thereof.
                You must be able to act out the character's dialogue, or lack thereof.
                You must be able to act out the character's emotions, or lack thereof.
                You must be able to act out the character's personality, or lack thereof.

                Dice Rolls: The player chose an option progression option and this is the latest entry you will find in the dialogue history.
                    A DnD styled dice throw is performed each time to determine the degree of success of this chosen option.
                    You must base your response on the dice roll outcome for the player's chosen option.
            
            Player Response Dice Roll Result: ${JSON.stringify(playerResponseDiceResult)}

            Player Chosen Dialogue Option: ${JSON.stringify(selectedPlayerDialogueOption)}

            ${selectedAiDialogueOption ? `This is the ai chosen dialogue option that you must now narrate in full: ${JSON.stringify(selectedAiDialogueOption)}` : ''
            }

            Character Profiles: "${JSON.stringify(dialogueParticipants)}"

            World context: "${JSON.stringify(worldContext)}"

            Dialogue history: "${JSON.stringify(dialogueHistory)}"

            Knowledge base: "${JSON.stringify(knowledgeBase)}"
        `;
    }

    public assembleSummarizeTopicPrompt(topic: DialogueHistoryTopic): string {
        return `
            Summarize the following topic of the dialogue with all its exchanges back and forth.
            Make sure to any important information, like actions taken, items exchanged, character traits displayed,
            facts mentioned, and in general, to provide a condensed by dense summary of everything discussed in the topic.
            Here is the topic: ${JSON.stringify(topic)}
        `;
    }

    public assembleSummarizeDialoguePrompt(dialogueHistory: DialogueHistory): string {
        return `
            Summarize the dialogue: ${JSON.stringify(dialogueHistory)}
        `;
    }


    public assembleAnalyzeAiResponseForActionsTakenPrompt(aiResponse: string): string {
        return `
            Analyze the AI's response for actions taken, if any.

            Your response must be a plain array of enum values of DialogueActionEnum.
            I will take your response as string and do JSON.parse(yourResponse) and get the array.
            If the array is empty, it means no actions were taken.
            It is very important that your response is parseable, because it will be consumed by the backend.

            Here are all the possible actions (DialogueActionEnum): ${JSON.stringify(Object.values(DialogueActionEnum))}

            Here is the AI's response that you must analyze: ${aiResponse}
        `;
    }

    public assembleAnalyzeAiResponseForGoalsFulfilledPrompt(
        aiResponse: string,
        aiUnfulfilledGoals: string[],
    ): string {
        return `
            Analyze the AI's response for goals fulfilled, if any.

            Your response must be a plain array of strings representing the goals fulfilled.
            I will take your response as string and do JSON.parse(yourResponse) and get the array.
            If the array is empty, it means no goals were fulfilled.
            It is very important that your response is parseable, because it will be consumed by the backend.

            Here are all the possible unfulfilled goals: ${JSON.stringify(aiUnfulfilledGoals)}

            Here is the AI's response that you must analyze: ${aiResponse}
        `;
    }

    public assembleGetAiDialogueOptionsPrompt(
        playerCharacter: CharacterProfile,
        aiCharacters: CharacterProfile[],
        selectedPlayerDialogueOption: DialogueOption,
        playerResponseDiceResult: DiceRollResult,
        dialogueHistory: DialogueHistory,
        knowledgeBase: KnowledgeBase,
        worldContext: WorldContext,
        quantity: number,
    ): string {
        return `
            Your task is to generate ${quantity} dialogue options the ai character could choose as a response to the player chosen dialogue option.

            Here is a Typescript interface of the raw JSON you must generate:

            type DialogueOptions = {
                chance: number;
                option: {
                    explanation!: string;
                    dialogueDirection!: DialogueDirectionEnum;
                    riskImpact!: SCALE_TYPE_ENUM;
                    clazz = 'DialogueOption';
                }
            }[]

            In other words, your output must be an array of objects with the above structure and look like this:
            [
                {
                    chance: <...>,
                    option: {
                        explanation: <...>;
                        dialogueDirection: <...>;
                        riskImpact: <...>;
                        clazz: 'DialogueOption';
                    }
                },
                ...
            ]

            It is extremely important your whole answer is this parseable JSON structure, because it will be consumed by the backend via JSON.parse(yourAnswer).

            "chance" is a number between 0 and 100, and it represents the chance of the ai character choosing this direction. The total must add up to 100.
            "explanation" is a short narration (1-2 sentences) of the ai decision and behavior, which will later be used to generate the full ai character response.
            "dialogueDirection" is a value of DialogueDirectionEnum, which represents the direction of the dialogue the ai character is choosing to steer the dialogue in.
                Here are all the possible values of DialogueDirectionEnum: ${JSON.stringify(Object.values(DialogueDirectionEnum))}.
            "riskImpact" is a value of SCALE_TYPE_ENUM, which represents the risk impact of the ai character choosing this direction and the impact of the outcome.
                Low risk means that a low dice roll may still result in a positive outcome, and high risk means that a high dice roll is required to get a positive outcome.
                Low impact means that regardless of how low or high the roll is, it is difficult to get an extreme result like a critical hit or a critical failure. Most outcomes will be mild failures or mild successes.
                High impact means that the outcome is very likely to be extreme, either a critical success or a critical failure.
                You must pick a riskImpact for this option that would align well with the character's personality and the situation, to represent the likelihood of a success or failure and its magnitude.
                Here are all the possible values of SCALE_TYPE_ENUM: ${JSON.stringify(Object.values(SCALE_TYPE_ENUM))}.

            These generated options must be in alignment with the personalities of the characters (especially the ai character who is making this decision).

            Here is the dialogue prompt data that will later be used to generate a response of the ai character to the player chosen dialogue option:
                Player Chosen Dialogue Option: ${JSON.stringify(selectedPlayerDialogueOption)}
                Player Response Dice Roll Result (to determine the degree of success of their chosen dialogue option): ${JSON.stringify(playerResponseDiceResult)}
                Player Character: "${JSON.stringify(playerCharacter)}"
                AI Character(s): "${JSON.stringify(aiCharacters)}"
                World context: "${JSON.stringify(worldContext)}"
                Dialogue history: "${JSON.stringify(dialogueHistory)}"
                Knowledge base: "${JSON.stringify(knowledgeBase)}"
        `
    }


    public assembleGeneratePlayerDialogueDirectionsPrompt(
        playerCharacter: CharacterProfile,
        aiCharacters: CharacterProfile[],
        dialogueHistory: DialogueHistory,
        knowledgeBase: KnowledgeBase,
        worldContext: WorldContext,
        quantity: number,
    ): string {
        return `
            Your task is to generate ${quantity} options of the dialogue direction the player could choose as a means to progress the dialogue (or end, etc.).

            Here is a Typescript interface of the raw JSON you must generate:

            type DialogueDirections = DialogueDirectionEnum[]

            In other words, your output must be an array of values of DialogueDirectionEnum and look like this:
            [ value1, value2, ... ]

            It is extremely important that your output is parseable with JSON.parse(yourOutput), because it will be consumed by the backend.

            These generated directions must be with alignment with the playre character's personality and the situation, and the directions must provide a sufficiently diverse set of options to evolve (or end) the dialogue. The player character may have goals they want to achieve, needs to satisfy, simply reply to the ai character's dialogue, change the topic, etc.

            Here is the dialogue prompt data that will later be used to generate a response of the ai character to the player chosen dialogue option:
                Player Chosen Dialogue Option: ${JSON.stringify(selectedPlayerDialogueOption)}
                Player Response Dice Roll Result (to determine the degree of success of their chosen dialogue option): ${JSON.stringify(playerResponseDiceResult)}
                Player Character: "${JSON.stringify(playerCharacter)}"
                AI Character(s): "${JSON.stringify(aiCharacters)}"
                World context: "${JSON.stringify(worldContext)}"
                Dialogue history: "${JSON.stringify(dialogueHistory)}"
                Knowledge base: "${JSON.stringify(knowledgeBase)}"
        `
    }

    public assembleGeneratePlayerDialogueOptionsPrompt(
        dialogueDirection: DialogueDirectionEnum,
        playerCharacter: CharacterProfile,
        aiCharacters: CharacterProfile[],
        dialogueHistory: DialogueHistory,
        knowledgeBase: KnowledgeBase,
        worldContext: WorldContext,
        scaleConfig: DiceScaleConfig,
        quantity: number,
    ): string {
        // TODO I need to provide explanations for how to select a rist impact, action, etc, based on the characters, dialogue history, etc.
        return `
            Your task is to generate the next dialogue options based on the dialogue direction the user selected - ${dialogueDirection}.
            Your response must strictly follow the following format (as Typescript interface for convenience): 
            
            {    
                text!: string;
                topic!: string;
                riskImpact!: SCALE_TYPE_ENUM;
            }[]

            I will take your output and do JSON.parse(yourOutput) and get the array, so it is extremely important that your output is parseable.
            
            Here are all the possible values of SCALE_TYPE_ENUM: ${JSON.stringify(Object.values(SCALE_TYPE_ENUM))}.
            Here are all the possible D20 scales (keys are values of SCALE_TYPE_ENUM, as you can see): ${JSON.stringify(scaleConfig)}.

            It is extremely important to follow the format extremely strictly as this will be consumed by the backend as a parsed JSON object.

            You must keep a sense of the context of the dialogue and base the options on that.
            Calm dialogue should receive calm options, and dynamic and tense dialogue should receive dynamic and tense options that allow for interesting roleplay.

            Try to include an option that continues the current topic (if the situation allows it),
            an option or several to change the topic to anything else that is in the dialogue goals of the player (if the situation allows it), etc. Tense situations should provide the player with very limited options, for example, if the dialogue is clearly headed towards combat and a refusal to continue to talk, the options should reflect that and limit the choices of the player.

            IMPORTANT: You must generate minimum 1 option, maximum ${quantity} options. In most cases go for the maximum, but in limiting dialogue conditions, like when: combat is clearly about to start; the dialogue clearly ends here; etc., you can provide only one or two limited options with the appropriate action from the list of possible actions, so as to force the player into the limiting situation and trigger the combat/end of dialogue/etc.

            This is the direction you must follow when generating the options. The player decided to set the direction of the dialogue in this general direction,
            so you must generate options that will steer the dialogue in this direction.

            Here is the player character: ${JSON.stringify(playerCharacter)}.
            Here is the list of AI characters: ${JSON.stringify(aiCharacters)}.
            Here is the world context: ${JSON.stringify(worldContext)}.
            Here is the dialogue history: ${JSON.stringify(dialogueHistory)}.
            Here is the knowledge base: ${JSON.stringify(knowledgeBase)}.
        `;
    }

}

