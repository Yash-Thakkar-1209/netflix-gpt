import { createSlice } from "@reduxjs/toolkit";

const gptslice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false
    },
    reducers: {
        toggleGPTSearchView : (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        }
    }
})

export const { toggleGPTSearchView  }  = gptslice.actions;
 
export default gptslice.reducer;