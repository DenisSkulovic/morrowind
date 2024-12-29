import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GenerationResult, GeneratorService } from '../../services/GeneratorService';
import { RequestStatusEnum } from '../../enum/RequestStatusEnum';
import { Context, ContextPlain } from '../../class/Context';
import { GenerationInstruction } from '../../class/GenerationInstruction';
import { CharacterGenInstruction } from '../../class/entities/content/CharacterGenInstruction';
import { CharacterGroupGenInstruction } from '../../class/entities/content/CharacterGroupGenInstruction';
import { handlePending, handleRejected } from '../common';

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
    async ({ instructions, context }: { instructions: GenerationInstruction[], context: ContextPlain }) => {
        const generatorService = new GeneratorService();
        return await generatorService.generateItems(instructions, Context.build(context));
    }
);

export const generateCharactersCustom = createAsyncThunk(
    'generator/generateCharactersCustom',
    async ({ instructions, context }: { instructions: CharacterGenInstruction[], context: ContextPlain }) => {
        const generatorService = new GeneratorService();
        return await generatorService.generateCharactersCustom(instructions, Context.build(context));
    }
);

export const generateCharactersDB = createAsyncThunk(
    'generator/generateCharactersDB',
    async ({ instructionIds, context }: { instructionIds: string[], context: ContextPlain }) => {
        const generatorService = new GeneratorService();
        return await generatorService.generateCharactersDB(instructionIds, Context.build(context));
    }
);

export const generateCharacterGroups = createAsyncThunk(
    'generator/generateCharacterGroups',
    async ({ instructions, context }: { instructions: CharacterGroupGenInstruction[], context: ContextPlain }) => {
        const generatorService = new GeneratorService();
        return await generatorService.generateCharacterGroups(instructions, Context.build(context));
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
        // item generation
        builder.addCase(generateItems.pending, (state) => handlePending(state.generationResult))
        builder.addCase(generateItems.fulfilled, (state, action) => {
            state.generationResult.status = RequestStatusEnum.SUCCEEDED;
            state.generationResult.data = action.payload
        })
        builder.addCase(generateItems.rejected, (state, action) => handleRejected(state.generationResult, action))

        // character generation CUSTOM
        builder.addCase(generateCharactersCustom.pending, (state) => handlePending(state.generationResult))
        builder.addCase(generateCharactersCustom.fulfilled, (state, action) => {
            state.generationResult.status = RequestStatusEnum.SUCCEEDED;
            state.generationResult.data = action.payload
        })
        builder.addCase(generateCharactersCustom.rejected, (state, action) => handleRejected(state.generationResult, action))

        // character generation DB
        builder.addCase(generateCharactersDB.pending, (state) => handlePending(state.generationResult))
        builder.addCase(generateCharactersDB.fulfilled, (state, action) => {
            state.generationResult.status = RequestStatusEnum.SUCCEEDED;
            state.generationResult.data = action.payload
        })
        builder.addCase(generateCharactersDB.rejected, (state, action) => handleRejected(state.generationResult, action))

        // character group generation
        builder.addCase(generateCharacterGroups.pending, (state) => handlePending(state.generationResult))
        builder.addCase(generateCharacterGroups.fulfilled, (state, action) => {
            state.generationResult.status = RequestStatusEnum.SUCCEEDED;
            state.generationResult.data = action.payload
        })
        builder.addCase(generateCharacterGroups.rejected, (state, action) => handleRejected(state.generationResult, action))
    }
});

export const { clearResults } = generatorSlice.actions;
export default generatorSlice.reducer;
