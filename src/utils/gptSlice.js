import { createSlice } from "@reduxjs/toolkit";

 const gptSearch=createSlice({
    name:'gpt',
    initialState:{
        isSearchGPT: false,
        gptMoviesSuggestion:null,
        gptMoviesDetailsTmdb:null
    },
    reducers:{
        searchGPT:(state)=>{
            state.isSearchGPT=!state.isSearchGPT
        },
        addGptMovies:(state, action)=>{
            const {gptMoviesSuggestion,gptMoviesDetailsTmdb}=action.payload
            state.gptMoviesSuggestion=gptMoviesSuggestion
            state.gptMoviesDetailsTmdb=gptMoviesDetailsTmdb
        }
    }
 });
 
export const {searchGPT,addGptMovies}=gptSearch.actions
 export default gptSearch.reducer