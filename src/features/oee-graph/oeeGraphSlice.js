import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getOeeGraphData } from "../../api-consumer/oeeGraphDataConsumer";

// create Asynchron Thunk for fetching oee graph data:
export const fetchGraphData = createAsyncThunk(
    'graph/fetch-graph-oee-data',
    async () => {
        return getOeeGraphData()
        .then(response => response)
    }
);

const initialState = {
    graphFetchError: null,
    graphDataFetching: 'idle',

    totalElements: 0, // max 12 = page size, but can be smaller than 12.
    content: null,

}

const graphSlice = createSlice({
    name: 'graph',
    initialState,
    reducers: {

    },
    extraReducers: (builder) =>{
        builder.addCase(fetchGraphData.fulfilled, (state, action) => {
            state.content = action.payload.content;
            state.totalElements = action.payload.totalElements;
            state.fetching = 'idle';
        });

        builder.addCase(fetchGraphData.pending, (state, action) => {
            state.fetching = 'fetching';
            state.error = null;
        });

        builder.addCase(fetchGraphData.rejected, (state, action) => {
            state.error = action.error.message;
            state.fetching = 'idle';
        });
    }
});

export const {} = graphSlice.actions;

export default graphSlice.reducer;