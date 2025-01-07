// this enum is necessary to connect an action with a game/dialogue mechanic, which could be triggered.

export enum DialogueActionEnum {
    CHANGE_TOPIC = 'CHANGE_TOPIC',
    END_DIALOGUE = 'END_DIALOGUE',
    ADD_UNFULFILLED_GOAL = 'ADD_UNFULFILLED_GOAL',
    DISCARD_UNFULFILLED_GOAL = 'DISCARD_UNFULFILLED_GOAL',
    REQUEST_TRADE = 'REQUEST_TRADE',
    OFFER_ITEM = 'OFFER_ITEM',
    ACCEPT_ITEM = 'ACCEPT_ITEM',
    OFFER_QUEST = 'OFFER_QUEST',
    ACCEPT_QUEST = 'ACCEPT_QUEST',
    DECLINE_QUEST = 'DECLINE_QUEST',
    INITIATE_COMBAT = 'INITIATE_COMBAT',
}