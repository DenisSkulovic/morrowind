import { Injectable, Logger } from '@nestjs/common';
import { DialogueActionEnum } from '../../enum/DialogueActionEnum';
import { DialogueGoalEnum } from '../../enum/DialogueGoalEnum';
import { DialogueState } from '../../class/DialogueState';
import { D20_scales } from '../../dnd/D20_scales';
import { DialogueHistoryTopic } from '../../class/DialogueHistory/DialogueHistoryTopic';
import { D20_SCALE_TYPE_ENUM } from '../../dnd/enum/D20_SCALE_TYPE_ENUM';
import { CharacterProfile } from '../../class/CharacterProfile';
import { DialogueHistory } from '../../class/DialogueHistory';
import { DiceThrowResult } from '../../dnd/class/DiceThrowResult';


@Injectable()
export class PromptService {
    private readonly logger = new Logger(PromptService.name);

    constructor() { }

    public async assembleProgressDialoguePrompt(diceResult: DiceThrowResult, dialogueState: DialogueState): Promise<string> {
        const playerCharacter: CharacterProfile | undefined = dialogueState.dialogueParticipants.find((participant) => participant.id === dialogueState.playerCharacterId);
        const aiCharacters: CharacterProfile[] = dialogueState.dialogueParticipants.filter((participant) => participant.id !== dialogueState.playerCharacterId);
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
            
            Dice Throw Result: ${JSON.stringify(diceResult)}
            Character Profiles: "${JSON.stringify(dialogueState.dialogueParticipants)}"
            World context: "${JSON.stringify(dialogueState.worldContext)}"
            Dialogue history: "${JSON.stringify(dialogueState.dialogueHistory)}"
            Knowledge base: "${JSON.stringify(dialogueState.knowledgeBase)}"
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

    public assembleSummarizeDialoguePrompt(dialogueHistory: DialogueHistory[]): string {
        return `
            Summarize the dialogue: ${JSON.stringify(dialogueHistory)}
        `;
    }

    public assembleGetNextDialogueOptionsPrompt(
        playerCharacter: CharacterProfile,
        aiCharacters: CharacterProfile[],
        dialogueHistory: DialogueHistory,
        quantity: number,
    ): string {
        throw new Error('Not implemented');
        // TODO I need to provide explanations for how to select a rist impact, action, etc, based on the characters, dialogue history, etc.
        return `
            Your task is to generate the next dialogue options.
            Your response must strictly follow the following format (as Typescript interface for convenience): 
            
            {    
                text!: string;
                topic!: string;
                riskImpact!: D20_SCALE_TYPE_ENUM;
                actionToTrigger?: DialogueActionEnum;
            }[]

            I will take your output and do JSON.parse(yourOutput) and get the array, so it is extremely important that your output is parseable.
            
            Here are all the possible actions: ${JSON.stringify(Object.values(DialogueActionEnum))}.
            Here are all the possible values of D20_SCALE_TYPE_ENUM: ${JSON.stringify(Object.values(D20_SCALE_TYPE_ENUM))}.
            Here are all the possible D20 scales (keys are values of D20_SCALE_TYPE_ENUM, as you can see): ${JSON.stringify(D20_scales)}.

            It is extremely important to follow the format extremely strictly as this will be consumed by the backend as a parsed JSON object.

            You must keep a sense of the context of the dialogue and base the options on that.
            Calm dialogue should receive calm options, and dynamic and tense dialogue should receive dynamic and tense options that allow for interesting roleplay.

            Try to include an option that continues the current topic (if the situation allows it),
            an option or several to change the topic to anything else that is in the dialogue goals of the player (if the situation allows it), etc. Tense situations should provide the player with very limited options, for example, if the dialogue is clearly headed towards combat and a refusal to continue to talk, the options should reflect that and limit the choices of the player.

            IMPORTANT: You must generate minimum 1 option, maximum ${quantity} options. In most cases go for the maximum, but in limiting dialogue conditions, like when: combat is clearly about to start; the dialogue clearly ends here; etc., you can provide only one or two limited options with the appropriate action from the list of possible actions, so as to force the player into the limiting situation and trigger the combat/end of dialogue/etc.

            Here is the player character: ${JSON.stringify(playerCharacter)}.
            Here is the list of AI characters: ${JSON.stringify(aiCharacters)}.
            Here is the dialogue history (i.e. summaries of topics previously discussed, if any): ${JSON.stringify(dialogueHistory)}.
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
}