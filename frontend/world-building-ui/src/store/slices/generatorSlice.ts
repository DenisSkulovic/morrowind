import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GeneratorService } from '../../services/GeneratorService';
import { RequestStatusEnum } from '../../enum/RequestStatusEnum';
import { Context } from '../../class/Context';
import { GenerationInstruction } from '../../class/GenerationInstruction';
import { CharacterGenInstruction } from '../../class/entities/content/CharacterGenInstruction';
import { CharacterGroupGenInstruction } from '../../class/entities/content/CharacterGroupGenInstruction';
import { Character } from '../../class/entities/content/Character';
import { Item } from '../../class/entities/content/Item/Item';


// Define state shape
interface GeneratorState {
    items: {
        data: Item[] | null;
        status: RequestStatusEnum;
        error: string | null;
    };
    characters: {
        data: Character[] | null;
        status: RequestStatusEnum;
        error: string | null;
    };
    characterGroups: {
        data: Character[][] | null;
        status: RequestStatusEnum;
        error: string | null;
    };
}

const initialState: GeneratorState = {
    items: {
        data: null,
        status: RequestStatusEnum.IDLE,
        error: null
    },
    characters: {
        data: null,
        status: RequestStatusEnum.IDLE,
        error: null
    },
    characterGroups: {
        data: null,
        status: RequestStatusEnum.IDLE,
        error: null
    }
};

// Async thunks
export const generateItems = createAsyncThunk(
    'generator/generateItems',
    async ({ instructions, context }: { instructions: GenerationInstruction[], context: Context }) => {
        const generatorService = new GeneratorService();
        return await generatorService.generateItems(instructions, context);
    }
);

export const generateCharactersCustom = createAsyncThunk(
    'generator/generateCharactersCustom',
    async ({ instructions, context }: { instructions: CharacterGenInstruction[], context: Context }) => {
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
    async ({ instructions, context }: { instructions: CharacterGroupGenInstruction[], context: Context }) => {
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
            state.items.status = RequestStatusEnum.IDLE;
            state.items.error = null;
        },
        clearCharacters: (state) => {
            state.characters.data = null;
            state.characters.status = RequestStatusEnum.IDLE;
            state.characters.error = null;
        },
        clearCharacterGroups: (state) => {
            state.characterGroups.data = null;
            state.characterGroups.status = RequestStatusEnum.IDLE;
            state.characterGroups.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // item generation
            .addCase(generateItems.pending, (state) => {
                state.items.status = RequestStatusEnum.LOADING;
                state.items.error = null;
            })
            .addCase(generateItems.fulfilled, (state, action) => {
                state.items.status = RequestStatusEnum.SUCCEEDED;
                state.items.data = action.payload;
            })
            .addCase(generateItems.rejected, (state, action) => {
                state.items.status = RequestStatusEnum.FAILED;
                state.items.error = action.error.message || 'Failed to generate items';
            })

            // character generation CUSTOM
            .addCase(generateCharactersCustom.pending, (state) => {
                state.characters.status = RequestStatusEnum.LOADING;
                state.characters.error = null;
            })
            .addCase(generateCharactersCustom.fulfilled, (state, action) => {
                state.characters.status = RequestStatusEnum.SUCCEEDED;
                state.characters.data = action.payload;
            })
            .addCase(generateCharactersCustom.rejected, (state, action) => {
                state.characters.status = RequestStatusEnum.FAILED;
                state.characters.error = action.error.message || 'Failed to generate characters';
            })

            // character generation DB
            .addCase(generateCharactersDB.pending, (state) => {
                state.characters.status = RequestStatusEnum.LOADING;
                state.characters.error = null;
            })
            .addCase(generateCharactersDB.fulfilled, (state, action) => {
                state.characters.status = RequestStatusEnum.SUCCEEDED;
                state.characters.data = action.payload;
            })
            .addCase(generateCharactersDB.rejected, (state, action) => {
                state.characters.status = RequestStatusEnum.FAILED;
                state.characters.error = action.error.message || 'Failed to generate characters';
            })

            // character group generation
            .addCase(generateCharacterGroups.pending, (state) => {
                state.characterGroups.status = RequestStatusEnum.LOADING;
                state.characterGroups.error = null;
            })
            .addCase(generateCharacterGroups.fulfilled, (state, action) => {
                state.characterGroups.status = RequestStatusEnum.SUCCEEDED;
                state.characterGroups.data = action.payload;
            })
            .addCase(generateCharacterGroups.rejected, (state, action) => {
                state.characterGroups.status = RequestStatusEnum.FAILED;
                state.characterGroups.error = action.error.message || 'Failed to generate character groups';
            });
    }
});

export const { clearItems, clearCharacters, clearCharacterGroups } = generatorSlice.actions;
export default generatorSlice.reducer;
