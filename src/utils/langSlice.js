import { createSlice } from "@reduxjs/toolkit";

 
 const langSlice=createSlice({
    name:'language',
    initialState:{
        preferredlanguage:'en'
    },
    reducers:{
        chanLanguage:(state, action)=>{
            state.preferredlanguage=action.payload
        }
    }

 });
 export const {chanLanguage}=langSlice.actions
 export default langSlice.reducer;