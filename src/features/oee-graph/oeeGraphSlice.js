import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    fetchError: null,
    fetching: 'idle',

    totalElements: 0, // max 12 = page size, but can be smaller than 12.
    content: null,

}

const graphSlice = createSlice({
    name: 'graph',
    initialState,
    reducers: {

    },
    extraReducers: (builder) =>{
        
    }
});