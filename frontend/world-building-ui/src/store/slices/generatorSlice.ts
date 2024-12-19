import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GenerationResult, GeneratorService } from '../../services/GeneratorService';
import { RequestStatusEnum } from '../../enum/RequestStatusEnum';
import { Context } from '../../class/Context';
import { GenerationInstruction } from '../../class/GenerationInstruction';
import { CharacterGenInstruction } from '../../class/entities/content/CharacterGenInstruction';
import { CharacterGroupGenInstruction } from '../../class/entities/content/CharacterGroupGenInstruction';
import { Character } from '../../class/entities/content/Character';
import { Item } from '../../class/entities/content/Item/Item';
import { CONTENT_ENTITY_MAP } from '../../CONTENT_ENTITY_MAP';
import { EntityEnum } from '../../enum/EntityEnum';
import { EquipmentSlot } from '../../class/entities/content/Slot/EquipmentSlot';
import { StorageSlot } from '../../class/entities/content/Slot/StorageSlot';

// TODO I need to implement a backend endpoint that would accept a map of entity names as key and entity array as value,
// using that it would create TypeORM instances, interconnect, and create in DB. Some entities may be pre-existing,
// so in that case it would only be dummy objects with id only (easy to determine - if that id was not among ones sent - then pre-existing.
// If not existing in this case - perfectly fine to throw an error).
// I mean, as an example, the generation result return may contain entities like Character, Item, EquipmentSlot, StorageSlot, etc.. Entities related to actual instances and not just abstract things.
// In the future this may include Location, Interior, etc.

// Define state shape
interface GeneratorState {
    generationResult: {
        data: GenerationResult | null,
        status: RequestStatusEnum;
        error: string | null;
    };
}

const initialState: GeneratorState = {
    generationResult: {
        data: null,
        status: RequestStatusEnum.IDLE,
        error: null
    }
}


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
        clearResults: (state) => {
            state.generationResult.data = null
            state.generationResult.status = RequestStatusEnum.IDLE;
            state.generationResult.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // item generation
            .addCase(generateItems.pending, (state) => {
                state.generationResult.status = RequestStatusEnum.LOADING;
                state.generationResult.error = null;
            })
            .addCase(generateItems.fulfilled, (state, action) => {
                state.generationResult.status = RequestStatusEnum.SUCCEEDED;
                state.generationResult.data = action.payload
            })
            .addCase(generateItems.rejected, (state, action) => {
                state.generationResult.status = RequestStatusEnum.FAILED;
                state.generationResult.error = action.error.message || 'Failed to generate items';
            })

            // character generation CUSTOM
            .addCase(generateCharactersCustom.pending, (state) => {
                state.generationResult.status = RequestStatusEnum.LOADING;
                state.generationResult.error = null;
            })
            .addCase(generateCharactersCustom.fulfilled, (state, action) => {
                state.generationResult.status = RequestStatusEnum.SUCCEEDED;
                state.generationResult.data = action.payload
            })
            .addCase(generateCharactersCustom.rejected, (state, action) => {
                state.generationResult.status = RequestStatusEnum.FAILED;
                state.generationResult.error = action.error.message || 'Failed to generate characters';
            })

            // character generation DB
            .addCase(generateCharactersDB.pending, (state) => {
                state.generationResult.status = RequestStatusEnum.LOADING;
                state.generationResult.error = null;
            })
            .addCase(generateCharactersDB.fulfilled, (state, action) => {
                state.generationResult.status = RequestStatusEnum.SUCCEEDED;
                state.generationResult.data = action.payload
            })
            .addCase(generateCharactersDB.rejected, (state, action) => {
                state.generationResult.status = RequestStatusEnum.FAILED;
                state.generationResult.error = action.error.message || 'Failed to generate characters';
            })

            // character group generation
            .addCase(generateCharacterGroups.pending, (state) => {
                state.generationResult.status = RequestStatusEnum.LOADING;
                state.generationResult.error = null;
            })
            .addCase(generateCharacterGroups.fulfilled, (state, action) => {
                state.generationResult.status = RequestStatusEnum.SUCCEEDED;
                state.generationResult.data = action.payload
            })
            .addCase(generateCharacterGroups.rejected, (state, action) => {
                state.generationResult.status = RequestStatusEnum.FAILED;
                state.generationResult.error = action.error.message || 'Failed to generate character groups';
            });
    }
});

export const { clearResults } = generatorSlice.actions;
export default generatorSlice.reducer;
