import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import moviesReducers from './moviesSlice'
import gptReducer from './gptSlice'
import langReducer from './langSlice'

const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducers,
        gpt:gptReducer,
        language:langReducer,

    }
})

export default appStore;