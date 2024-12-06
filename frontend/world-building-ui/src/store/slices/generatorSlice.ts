import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GeneratorService } from '../../services/GeneratorService';
import { GenerationInstructionDTO, CharacterGenInstructionDTO, CharacterGroupGenInstructionDTO } from '../../proto/common';
import { Context } from '../../types';
import { GenerateItemsResponse, GenerateCharactersResponse, GenerateCharacterGroupsResponse } from '../../proto/generator';

export enum RequestStatus {
    IDLE = 'idle',
    LOADING = 'loading',
    SUCCEEDED = 'succeeded',
    FAILED = 'failed'
}

// Define state shape
interface GeneratorState {
    items: {
        data: GenerateItemsResponse | null;
        status: RequestStatus;
        error: string | null;
    };
    characters: {
        data: GenerateCharactersResponse | null;
        status: RequestStatus;
        error: string | null;
    };
    characterGroups: {
        data: GenerateCharacterGroupsResponse | null;
        status: RequestStatus;
        error: string | null;
    };
}

const initialState: GeneratorState = {
    items: {
        data: null,
        status: RequestStatus.IDLE,
        error: null
    },
    characters: {
        data: null,
        status: RequestStatus.IDLE,
        error: null
    },
    characterGroups: {
        data: null,
        status: RequestStatus.IDLE,
        error: null
    }
};

// Async thunks
export const generateItems = createAsyncThunk(
    'generator/generateItems',
    async ({ instructions, context }: { instructions: GenerationInstructionDTO[], context: Context }) => {
        const generatorService = new GeneratorService();
        return await generatorService.generateItems(instructions, context);
    }
);

export const generateCharactersCustom = createAsyncThunk(
    'generator/generateCharactersCustom',
    async ({ instructions, context }: { instructions: CharacterGenInstructionDTO[], context: Context }) => {
        const generatorService = new GeneratorService();
        return await generatorService.generateCharactersCustom(instructions, context);
    }
);

export const generateCharactersDB = createAsyncThunk(
    'generator/generateCharactersDB',
    async ({ instructionIds, context }: { instructionIds: string[], context: Context }) => {
        const generatorService = new GeneratorService();
        return await generatorService.generateCharactersDB(instructionIds, context);
    }
);

export const generateCharacterGroups = createAsyncThunk(
    'generator/generateCharacterGroups',
    async ({ instructions, context }: { instructions: CharacterGroupGenInstructionDTO[], context: Context }) => {
        const generatorService = new GeneratorService();
        return await generatorService.generateCharacterGroups(instructions, context);
    }
);

// Slice
const generatorSlice = createSlice({
    name: 'generator',
    initialState,
    reducers: {
        clearItems: (state) => {
            state.items.data = null;
            state.items.status = RequestStatus.IDLE;
            state.items.error = null;
        },
        clearCharacters: (state) => {
            state.characters.data = null;
            state.characters.status = RequestStatus.IDLE;
            state.characters.error = null;
        },
        clearCharacterGroups: (state) => {
            state.characterGroups.data = null;
            state.characterGroups.status = RequestStatus.IDLE;
            state.characterGroups.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // item generation
            .addCase(generateItems.pending, (state) => {
                state.items.status = RequestStatus.LOADING;
                state.items.error = null;
            })
            .addCase(generateItems.fulfilled, (state, action) => {
                state.items.status = RequestStatus.SUCCEEDED;
                state.items.data = action.payload;
            })
            .addCase(generateItems.rejected, (state, action) => {
                state.items.status = RequestStatus.FAILED;
                state.items.error = action.error.message || 'Failed to generate items';
            })

            // character generation CUSTOM
            .addCase(generateCharactersCustom.pending, (state) => {
                state.characters.status = RequestStatus.LOADING;
                state.characters.error = null;
            })
            .addCase(generateCharactersCustom.fulfilled, (state, action) => {
                state.characters.status = RequestStatus.SUCCEEDED;
                state.characters.data = action.payload;
            })
            .addCase(generateCharactersCustom.rejected, (state, action) => {
                state.characters.status = RequestStatus.FAILED;
                state.characters.error = action.error.message || 'Failed to generate characters';
            })

            // character generation DB
            .addCase(generateCharactersDB.pending, (state) => {
                state.characters.status = RequestStatus.LOADING;
                state.characters.error = null;
            })
            .addCase(generateCharactersDB.fulfilled, (state, action) => {
                state.characters.status = RequestStatus.SUCCEEDED;
                state.characters.data = action.payload;
            })
            .addCase(generateCharactersDB.rejected, (state, action) => {
                state.characters.status = RequestStatus.FAILED;
                state.characters.error = action.error.message || 'Failed to generate characters';
            })

            // character group generation
            .addCase(generateCharacterGroups.pending, (state) => {
                state.characterGroups.status = RequestStatus.LOADING;
                state.characterGroups.error = null;
            })
            .addCase(generateCharacterGroups.fulfilled, (state, action) => {
                state.characterGroups.status = RequestStatus.SUCCEEDED;
                state.characterGroups.data = action.payload;
            })
            .addCase(generateCharacterGroups.rejected, (state, action) => {
                state.characterGroups.status = RequestStatus.FAILED;
                state.characterGroups.error = action.error.message || 'Failed to generate character groups';
            });
    }
});

export const { clearItems, clearCharacters, clearCharacterGroups } = generatorSlice.actions;
export default generatorSlice.reducer;
