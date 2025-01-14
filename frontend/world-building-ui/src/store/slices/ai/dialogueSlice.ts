import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DialogueService } from "../../../ai/dialogue/services/DialogueService";
import { WorldContext } from "../../../ai/dialogue/class/WorldContext";
import { DialogueHistory } from "../../../ai/dialogue/class/DialogueHistory";
import { CharacterProfile } from "../../../ai/dialogue/class/CharacterProfile";
import { KnowledgeBase } from "../../../ai/dialogue/class/KnowledgeBase";
import { AiServiceEnum } from "../../../ai/dialogue/enum/AiServiceEnum";

interface DialogueState {
    initiatingParticipantId: string | null;
    playerCharacterId: string | null;
    aiProvider: string | null;
    dialogueParticipants: CharacterProfile[] | null;
    dialogueHistory: DialogueHistory[] | null;
    worldContext: WorldContext | null;
    knowledgeBase: KnowledgeBase | null;
}

const dialogueService = new DialogueService();

const initializeDialogue = createAsyncThunk('dialogue/initializeDialogue', async (
    {
        initiatingParticipantId,
        playerCharacterId,
        aiProvider,
        dialogueParticipants,
        worldContext,
        knowledgeBase
    }: {
        initiatingParticipantId: string,
        playerCharacterId: string,
        aiProvider: AiServiceEnum,
        dialogueParticipants: CharacterProfile[],
        worldContext?: WorldContext,
        knowledgeBase?: KnowledgeBase
    }, { rejectWithValue }) => {
    try {
        const response = await dialogueService.initializeDialogue(
            initiatingParticipantId,
            playerCharacterId,
            aiProvider,
            dialogueParticipants,
            worldContext,
            knowledgeBase
        );
        return response.toObject();
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const progressDialogue = createAsyncThunk('dialogue/progressDialogue', async (message: string, { rejectWithValue }) => {
    try {
        const response = await dialogueService.progressDialogue(message, {});
        return response;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const getUserDialogueOptions = createAsyncThunk('dialogue/getUserDialogueOptions', async (message: string, { rejectWithValue }) => {
    try {
        const response = await dialogueService.generatePlayerDialogueOptions(message, 3, {});
        return response.toObject();
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const getDialogueState = createAsyncThunk('dialogue/getDialogueState', async (dialogueId: string, { rejectWithValue }) => {
    try {
        const response = await dialogueService.getDialogueState(dialogueId, {});
        return response.toObject();
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const interruptDialogue = createAsyncThunk('dialogue/interruptDialogue', async (message: string, { rejectWithValue }) => {
    try {
        const response = await dialogueService.finalizeDialogue(message, {});
        return response.toObject();
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const endDialogue = createAsyncThunk('dialogue/endDialogue', async (message: string, { rejectWithValue }) => {
    try {
        const response = await dialogueService.finalizeDialogue(message, {});
        return response.toObject();
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const initialState: DialogueState = {
    initiatingParticipantId: null,
    playerCharacterId: null,
    aiProvider: null,
    dialogueParticipants: null,
    dialogueHistory: null,
    worldContext: null,
    knowledgeBase: null,
};

const dialogueSlice = createSlice({
    name: 'dialogue',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(initializeDialogue.fulfilled, (state, action) => {
            state.initiatingParticipantId = action.payload.initiatingParticipantId;
        });
        builder.addCase(getDialogueState.fulfilled, (state, action) => {
            state.dialogueParticipants = action.payload.dialogueParticipants;
        });
        builder.addCase(progressDialogue.fulfilled, (state, action) => {
            state.dialogueHistory = action.payload.dialogueHistory;
        });
        builder.addCase(getUserDialogueOptions.fulfilled, (state, action) => {
            state.dialogueParticipants = action.payload.dialogueParticipants;
        });
    },
});

export default dialogueSlice.reducer;