import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trendingMovies:null,
        topRatedMovies:null,
        awardWinningMovies:null,
        ratedMovies:null,
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
        }
    }
})
export const {addAwardWinningMovies,addTopRatedMovies,addNowPlayingMovies,addTrailer,addTrendingMovies}=moviesSlice.actions
export default moviesSlice.reducer;

