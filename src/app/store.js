import {configureStore} from '@reduxjs/toolkit';
import tableReducer from '../features/oee-table/oeeTableSlice';

export const store = configureStore({
    reducer: {
        table: tableReducer

    }
});