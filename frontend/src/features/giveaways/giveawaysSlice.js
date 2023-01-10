import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import giveawaysService from './giveawaysService';

const initialState = {
    giveaways: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

// Define the thunks 
// Create new giveaway
export const createGiveaway = createAsyncThunk('giveaways/create', async (giveawayData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await giveawaysService.createGiveaway(giveawayData, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// Get giveaways
export const getGiveaways = createAsyncThunk('giveaways/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await giveawaysService.getGiveaways(token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// Edit giveaways
export const editGiveaway = createAsyncThunk('giveaways/edit', async (giveawayData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await giveawaysService.editGiveaway(giveawayData, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

// Delete giveaways
export const deleteGiveaway = createAsyncThunk('giveaways/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await giveawaysService.deleteGiveaway(id, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});


// Giveaways Slice 
export const giveawaysSlice = createSlice({
    name: 'giveaways',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createGiveaway.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createGiveaway.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.giveaways.push(action.payload);
            })
            .addCase(createGiveaway.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getGiveaways.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getGiveaways.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.giveaways = action.payload;
            })
            .addCase(getGiveaways.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(editGiveaway.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(editGiveaway.fulfilled, (state) => {
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(editGiveaway.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(deleteGiveaway.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteGiveaway.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.giveaways = state.giveaways.filter((giveaway) => giveaway._id !== action.payload.message);
            })
            .addCase(deleteGiveaway.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
    }
});

export const { reset } = giveawaysSlice.actions;
export default giveawaysSlice.reducer;