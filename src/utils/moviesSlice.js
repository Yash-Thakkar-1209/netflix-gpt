import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: [],
        getMovieTrailer: [],
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addGetMovieTrailer: (state, action) => {
            state.getMovieTrailer = action.payload;
        }
    }
});

export const { addNowPlayingMovies, addGetMovieTrailer }  = moviesSlice.actions;
 
export default moviesSlice.reducer;