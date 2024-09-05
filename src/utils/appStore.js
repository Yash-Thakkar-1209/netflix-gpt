import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice"
import gptReducer from "./gptslice"
import langReducer from "./multiLangSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        lang: langReducer
    },
});

export default appStore;