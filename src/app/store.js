import {configureStore} from '@reduxjs/toolkit';
import tableReducer from '../features/oee-table/oeeTableSlice';
import graphReducer from '../features/oee-graph/oeeGraphSlice';

export const store = configureStore({
    reducer: {
        table: tableReducer,
        graph: graphReducer
    }
});