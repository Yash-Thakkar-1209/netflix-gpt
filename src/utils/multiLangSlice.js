import { createSlice } from "@reduxjs/toolkit";

const multiLangSlice = createSlice({
    name: "lang",
    initialState: {
        lang : "en"
    },
    reducers: {
        changeLang : (state, action) => {
            state.lang = action.payload
        }
    }
})

export const {changeLang} = multiLangSlice.actions;

export default multiLangSlice.reducer;