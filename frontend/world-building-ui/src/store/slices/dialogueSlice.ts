import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DialogueMessage {
    sender: "user" | "ai"; // Identifies the message sender
    content: string; // The full message content (or concatenated chunks for AI responses)
    timestamp: number; // Unix timestamp for sorting/display purposes
}

export interface DialogueStreamState {
    history: DialogueMessage[]; // Full history of the conversation
    currentChunks: string[]; // Chunks of the current AI response
    isLoading: boolean; // Indicates if the AI is currently generating a response
    isComplete: boolean; // Whether the latest AI response is complete
    error: string | null; // Error message, if any
}

const initialState: DialogueStreamState = {
    history: [],
    currentChunks: [],
    isLoading: false,
    isComplete: false,
    error: null,
};

const dialogueStreamSlice = createSlice({
    name: "dialogueStream",
    initialState,
    reducers: {
        startStream(state) {
            state.isLoading = true;
            state.isComplete = false;
            state.error = null;
            state.currentChunks = [];
        },
        addChunk(state, action: PayloadAction<string>) {
            state.currentChunks.push(action.payload);
        },
        completeStream(state) {
            state.isLoading = false;
            state.isComplete = true;
            // Append the concatenated AI response to the history
            const aiMessage: DialogueMessage = {
                sender: "ai",
                content: state.currentChunks.join(" "),
                timestamp: Date.now(),
            };
            state.history.push(aiMessage);
            state.currentChunks = [];
        },
        addUserMessage(state, action: PayloadAction<string>) {
            const userMessage: DialogueMessage = {
                sender: "user",
                content: action.payload,
                timestamp: Date.now(),
            };
            state.history.push(userMessage);
        },
        failStream(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.isComplete = false;
            state.error = action.payload;
        },
        resetStream(state) {
            Object.assign(state, initialState);
        },
    },
});

export const {
    startStream,
    addChunk,
    completeStream,
    addUserMessage,
    failStream,
    resetStream,
} = dialogueStreamSlice.actions;

export default dialogueStreamSlice.reducer;
