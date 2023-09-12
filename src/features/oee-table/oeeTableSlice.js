import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getCurrentOeeTableData} from '../../api-consumer/oeeTableDataConsumer';


// create Asynchron Thunk for fetching current oee data:
export const fetchCurrentOee = createAsynchThunk(
    'table/fetch-current-oee-data',
    async () => {
        return getCurrentOeeTableData();
    }
);

const initialState = {

    fetching: 'idle', // fetching or idle
    error: null,
    fetchTriggered: true, // if idle and triggered --> fetch data; else

    currentOeeData: null, // at the beginning, there is no data

}

const tableSlice = createSlice({
    name: 'table',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        // =========== FETCH CURRENT OEE DATA ==========
        builder.addCase(fetchCurrentOee.fulfilled, (state, action) => {
            state.data = action.payload;
            state.fetching = 'idle';
            state.fetchTriggered = false;
        })
        builder.addCase(fetchCurrentOee.pending, (state, action) => {
            state.fetching = 'fetching';

            // while trying another fetch, clear previous error data
            state.error = null;
        })
        builder.addCase(fetchCurrentOee.rejected, (state, action) => {
            state.error = action.error.message;
            state.fetching = 'idle';

        })
    }
});

export const {} = tableSlice.actions;

export default tableSlice.reducer;