import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: [],
        getMovieTrailer: [],
        popularMovies: [],
        topRatedMovies: [],
        upComingMovies:[],
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addGetMovieTrailer: (state, action) => {
            state.getMovieTrailer = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpComingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        },

    }
});

export const { addNowPlayingMovies, addGetMovieTrailer, addPopularMovies, addTopRatedMovies, addUpComingMovies }  = moviesSlice.actions;
 
export default moviesSlice.reducer;