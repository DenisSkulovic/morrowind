import { Injectable, Logger } from '@nestjs/common';
import { DialogueHistoryTopic } from '../../class/DialogueHistory/DialogueHistoryTopic';
import { SCALE_TYPE_ENUM } from '../../dnd/enum/SCALE_TYPE_ENUM';
import { CharacterProfile } from '../../class/CharacterProfile';
import { DialogueHistory } from '../../class/DialogueHistory';
import { DiceRollResult } from '../../dnd/class/DiceRollResult';
import { DialogueDirectionEnum } from '../../enum/DialogueDirectionEnum';
import { WorldContext } from '../../class/WorldContext';
import { KnowledgeBase } from '../../class/KnowledgeBase';
import { DiceScaleConfig } from '../../dnd/types';
import { PlayerCharacterStep } from '../../class/DialogueHistory/DialogueStep/PlayerCharacterStep';
import { AiCharacterStep } from '../../class/DialogueHistory/DialogueStep/AiCharacterStep';
import { DialogueStep } from '../../class/DialogueHistory/DialogueStep';
import { DialogueAttitudeEnum } from '../../enum/DialogueAttitudeEnum';
import { DialogueStepOutcomeEnum } from '../../enum/DialogueStepOutcomeEnum';



const dialogueOptionChance_meaning = `
    "chance" is a numerical value ranging from 0 to 100, indicating the probability of the character selecting this particular dialogue direction. 
    The sum of all chances for available options must equal 100.
`
const dialogueOptionExplanation_meaning = `
    "explanation" provides a concise narrative (1-2 sentences) detailing the AI's decision-making process and behavior. 
    This will be used to craft the complete character response.
`
const dialogueOptionDialogueDirection_meaning = `
    "dialogueDirection" is an attribute of DialogueDirectionEnum, signifying the path the character intends to guide the conversation towards.
    The possible values of DialogueDirectionEnum are: ${JSON.stringify(Object.values(DialogueDirectionEnum))}.
`
const dialogueOptionRiskImpact_meaning = `
    "riskImpact" is an attribute of SCALE_TYPE_ENUM, reflecting the potential risk and impact associated with the character's chosen direction and its outcome.
    A low risk implies that even a low dice roll might yield a favorable result, whereas a high risk necessitates a high dice roll for a positive outcome.
    A low impact suggests that extreme results, such as critical hits or failures, are rare, with most outcomes being moderate successes or failures.
    Conversely, a high impact indicates a higher likelihood of extreme outcomes, either as critical successes or failures.
    Select a riskImpact that aligns with the character's personality and the context, representing the probability and magnitude of success or failure.
    The possible values of SCALE_TYPE_ENUM are: ${JSON.stringify(Object.values(SCALE_TYPE_ENUM))}.
`






@Injectable()
export class PromptService {
    private readonly logger = new Logger(PromptService.name);




    public assembleProgressDialoguePrompt(
        dialogueStep: DialogueStep,
        playerCharacter: CharacterProfile,
        aiCharacters: CharacterProfile[],
        dialogueHistory: DialogueHistory,
        knowledgeBase: KnowledgeBase,
        worldContext: WorldContext,
    ): string {
        return `
            Instructions: 
                Narrate the entire dialogue step, starting with the player's action and followed by the AI's reaction. 
                The interaction involves the following character(s): ${aiCharacters.map((character) => `${character.name} (${character.id})`).join(', ')},
                and ${playerCharacter.name} (${playerCharacter.id}).
                Capture the essence of the interaction, ensuring the sequence of the player's step and the AI's response is clear.
                Reflect the unique traits, needs, and moods of each character as provided, while being mindful that characters may not be fully aware of each other's traits, inventory, or background.
                Highlight any character actions, emotions, and personality traits that are evident in this step, considering that these may be gradually discovered as the dialogue progresses.
                The entire dialogue step should be contextualized within the dialogue history, the surrounding world context, and the knowledge base, acknowledging that characters' knowledge of each other may be limited, especially if they have just met.

            Dialogue Step: ${JSON.stringify(dialogueStep)}
            Player Character: ${JSON.stringify(playerCharacter)}
            AI Character(s): ${JSON.stringify(aiCharacters)}
            World Context: ${JSON.stringify(worldContext)}
            Dialogue History: ${JSON.stringify(dialogueHistory)}
            Knowledge Base: ${JSON.stringify(knowledgeBase)}
        `;
    }



    // TODO: Not used at the moment, but could be really useful to combat huge dialogue histories, where older steps could be provided as a summary in new prompts.
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
            Instructions:
                Provide a comprehensive summary of the entire dialogue history.
                Ensure to capture the key points, including the main actions, decisions, and exchanges between characters.
                Highlight any significant events, turning points, and outcomes that occurred during the dialogue.
                Reflect the emotions, motivations, and personality traits of the characters involved.
                Mention any important information, items, or facts that were revealed or exchanged.
                Contextualize the summary within the broader narrative and world context.

            Dialogue History: ${JSON.stringify(dialogueHistory)}
        `;
    }




    public assembleGetAiDialogueOptionsPrompt(
        playerCharacter: CharacterProfile,
        aiCharacters: CharacterProfile[],
        playerStep: PlayerCharacterStep,
        dialogueHistory: DialogueHistory,
        knowledgeBase: KnowledgeBase,
        worldContext: WorldContext,
        quantity: number,
    ): string {
        // refer to class ChanceDialogueOption
        return `
            Your task is to generate ${quantity} dialogue options that the AI character could select in response to the player's chosen dialogue option.

            Below is the TypeScript interface for the JSON structure you need to produce:

            type DialogueOptions = {
                chance: number;
                option: {
                    explanation!: string;
                    dialogueDirection!: DialogueDirectionEnum;
                    riskImpact!: SCALE_TYPE_ENUM;
                    clazz = 'DialogueOption';
                }
                clazz: 'ChanceDialogueOption';
            }[]

            Your output should be an array of ChanceDialogueOption objects, formatted as shown below:
            [
                {
                    chance: <...>,
                    option: {
                        explanation: <...>,
                        dialogueDirection: <...>,
                        riskImpact: <...>,
                        clazz: 'DialogueOption'
                    },
                    clazz: 'ChanceDialogueOption'
                },
                ...
            ]

            It is crucial that your entire response is a valid JSON structure, as it will be parsed by the backend using JSON.parse(yourAnswer).

            ${dialogueOptionChance_meaning}
            ${dialogueOptionExplanation_meaning}
            ${dialogueOptionDialogueDirection_meaning}
            ${dialogueOptionRiskImpact_meaning}

            Ensure that the generated options align with the characters' personalities, particularly the AI character making the decision.

            Here is the dialogue prompt data that will be used to generate the AI character's response to the player's chosen dialogue option:
                Player Chosen Dialogue Option and the resulting dice roll & outcome: ${JSON.stringify(playerStep)}
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
            Your task is to generate ${quantity} dialogue direction options that the player can choose to either progress or conclude the dialogue.

            Below is the TypeScript interface for the JSON structure you need to produce:

            type DialogueDirections = DialogueDirectionEnum[]

            Your output should be an array of DialogueDirectionEnum values, formatted as follows:
            [ value1, value2, ... ]

            It is crucial that your output is a valid JSON structure, as it will be parsed by the backend using JSON.parse(yourOutput).

            The generated directions should align with the player's character personality and the current situation, offering a diverse set of options to advance or conclude the dialogue. The player character may have specific goals, needs, or responses to the AI character's dialogue, or they may wish to change the topic.

            Here is the dialogue prompt data that will be used to generate the AI character's response to the player's chosen dialogue option:
                Player Character: "${JSON.stringify(playerCharacter)}"
                AI Character(s): "${JSON.stringify(aiCharacters)}"
                World context: "${JSON.stringify(worldContext)}"
                Dialogue history: "${JSON.stringify(dialogueHistory)}"
                Knowledge base: "${JSON.stringify(knowledgeBase)}"
        `;
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
        // refer to class DialogueOption
        // TODO: Provide detailed explanations for selecting risk impact, actions, etc., based on characters, dialogue history, etc.
        return `
            Your task is to generate the next set of dialogue options based on the selected dialogue direction: ${dialogueDirection}.
            Please ensure your response adheres strictly to the following TypeScript interface format:

            type DialogueOptions = {
                explanation: string;
                dialogueDirection: DialogueDirectionEnum;
                riskImpact: SCALE_TYPE_ENUM;
                clazz: 'DialogueOption';
            }[]

            ${dialogueOptionExplanation_meaning}
            ${dialogueOptionDialogueDirection_meaning}
            ${dialogueOptionRiskImpact_meaning}

            The output must be a valid JSON structure, as it will be parsed using JSON.parse(yourOutput).

            Reference for dice scales (where "sides" indicates the type of dice, e.g., 20 for D20, and keys represent SCALE_TYPE_ENUM values): ${JSON.stringify(scaleConfig)}.

            Adherence to the format is crucial as the backend will parse this JSON object.

            Consider the dialogue context when crafting options. Calm dialogues should have calm options, while dynamic and tense dialogues should have options that reflect their nature, enhancing roleplay.

            Include options to continue the current topic (if applicable) and options to change the topic to align with the player's dialogue goals (if applicable). In tense situations, limit options to reflect the scenario, such as impending combat or dialogue conclusion, to guide the player towards these outcomes.

            IMPORTANT: Generate a minimum of 1 and a maximum of ${quantity} options. Aim for the maximum in most cases, but in restrictive dialogue scenarios, such as imminent combat or dialogue conclusion, provide only one or two options to steer the player towards these outcomes.

            Follow the player's chosen dialogue direction to generate options that align with this path.

            Here is the dialogue prompt data for generating the AI character's response to the player's chosen dialogue option:
                Player Character: "${JSON.stringify(playerCharacter)}"
                AI Character(s): "${JSON.stringify(aiCharacters)}"
                World context: "${JSON.stringify(worldContext)}"
                Dialogue history: "${JSON.stringify(dialogueHistory)}"
                Knowledge base: "${JSON.stringify(knowledgeBase)}"
        `;
    }

    public assembleAnalyzeDialogueStepForOutcomePrompt(
        playerStep: PlayerCharacterStep,
        aiStep: AiCharacterStep,
        dialogueHistory: DialogueHistory,
        knowledgeBase: KnowledgeBase,
        worldContext: WorldContext,
        dialogueParticipants: CharacterProfile[],
    ): string {
        return `
            Your task is to analyze the outcome of the dialogue step based on the player and AI steps provided.

            Based on the information provided, you need to determine the outcome of this dialogue step.
            The output must strictly follow the StepOutcome interface as a JSON string. 

            TypeScript Interface for StepOutcome (you must produce a valid JSON structure that matches this interface):
            interface StepOutcome {
                characterChanges?: {
                    [characterId: string]: {
                        markUnfulfilledGoalsAsFulfilled?: string[];
                        addUnfulfilledGoals?: string[];
                        removeUnfulfilledGoals?: string[];
                        changeDialogueAttitudeTo?: DialogueAttitudeEnum;
                        addOrRemoveOrModifyItemInInventory?: {
                            itemId: string;
                            quantityDeltaChange: number;
                        };
                    };
                };
                newTopicName?: string;
                stepOutcome: DialogueStepOutcomeEnum;
                clazz: 'StepOutcome';
            }

            If there are any changes to the characters, such as goals being added, removed, or fulfilled,
            or if the attitude towards another character has changed, these must be recorded. Additionally,
            if there are any changes in the inventory, such as items being traded between characters, stepOutcome must be set to ITEMS_EXCHANGED and
            addOrRemoveOrModifyItemInInventory on both involved characters filled accordingly.
            A trade would be recorded with a negative quantity for the character giving the item and a positive quantity for the character receiving it.

            If the topic of conversation changes (i.e. stepOutcome set to TOPIC_CHANGED), the newTopicName field must be filled with a human-readable label of the new topic.

            If no significant changes are detected, meaning the conversation continues on the same topic without any impact,
            the stepOutcome should be set to NO_SIGNIFICANT_OUTCOME.

            If the dialogue has clearly ended, the stepOutcome should be set to DIALOGUE_ENDED.

            If the dialogue is about to start combat, the stepOutcome should be set to COMBAT_STARTED.

            It is crucial that these JSONs are produced with precision and consistency, acting as an objective outside arbiter.
            The outcome will control the flow of the dialogue, making it a vital part of the process.

            Dialogue Attitude is an attitude towards the counterpart that may last across many steps or even the whole dialogue,
            so if you detect a change in the attitude of a character towards the counterpart, you must set changeDialogueAttitudeTo to the new value; otherwise - do not include this field in your output.

            DialogueAttitudeEnum: ${JSON.stringify(Object.values(DialogueAttitudeEnum))}
            DialogueStepOutcomeEnum: ${JSON.stringify(Object.values(DialogueStepOutcomeEnum))}

            Player Step:
            Character ID: ${playerStep.characterId}
            Selected Dialogue Option: ${JSON.stringify(playerStep.selectedDialogueOption)}
            Dice Roll Result: ${JSON.stringify(playerStep.diceRollResult)}

            AI Step:
            Character ID: ${aiStep.characterId}
            Selected Dialogue Option: ${JSON.stringify(aiStep.selectedDialogueOption)}
            Dice Roll Result: ${JSON.stringify(aiStep.diceRollResult)}

            Dialogue Participants: ${JSON.stringify(dialogueParticipants)}
            World Context: ${JSON.stringify(worldContext)}
            Dialogue History: ${JSON.stringify(dialogueHistory)}
            Knowledge Base: ${JSON.stringify(knowledgeBase)}
        `;
    }

}

