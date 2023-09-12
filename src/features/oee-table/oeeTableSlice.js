import {createSlice} from '@reduxjs/toolkit';


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
    }
});