import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trendingMovies:null,
        topRatedMovies:null,
        awardWinningMovies:null,
        trailer:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
           state.nowPlayingMovies=action.payload
        },
        addTrendingMovies:(state,action)=>{
           state.trendingMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
           state.topRatedMovies=action.payload
        },
        addAwardWinningMovies:(state,action)=>{
           state.awardWinningMovies=action.payload
        },
        addTrailer:(state, action)=>{
            state.trailer=action.payload
        },
        clearMoviesSlice:(state)=>{
            state.nowPlayingMovies=null;
            state.topRatedMovies=null;
            state.trendingMovies=null;
            state.awardWinningMovies=null;
            state.trailer=null

        }
    }
})
export const {clearMoviesSlice,addAwardWinningMovies,addTopRatedMovies,addNowPlayingMovies,addTrailer,addTrendingMovies}=moviesSlice.actions
export default moviesSlice.reducer;

