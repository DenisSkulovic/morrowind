// this enum is necessary to connect an action with a game/dialogue mechanic, which could be triggered.

export enum DialogueStepOutcomeEnum {
    NO_SIGNIFICANT_OUTCOME = 'NO_SIGNIFICANT_OUTCOME',
    TOPIC_CHANGED = 'TOPIC_CHANGED',
    DIALOGUE_ENDED = 'DIALOGUE_ENDED',
    ITEMS_EXCHANGED = 'ITEMS_EXCHANGED',
    QUEST_OFFERED = 'QUEST_OFFERED',
    QUEST_ACCEPTED = 'QUEST_ACCEPTED',
    QUEST_DECLINED = 'QUEST_DECLINED',
    COMBAT_STARTED = 'COMBAT_STARTED',
}