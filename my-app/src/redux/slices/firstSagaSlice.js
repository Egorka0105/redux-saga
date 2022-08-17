import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cats:[],
    isLoading: false,
};

export const catSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        getCatsFetch(state) {
            state.isLoading = true;
        },
        getCatsSuccess: (state, action) => {
            state.cats = action.payload;
            state.isLoading = false;
        },
    },
});

export const { getCatsFetch, getCatsSuccess } = catSlice.actions;
export default catSlice.reducer; // catsReducer