import { createSlice } from "@reduxjs/toolkit";

const CompleteData = createSlice({
    name:'Everydata',
    initialState:{
        Data:[]
    },
    reducers:{
        Addition:(state,action)=>{
            state.Data.push(action.payload)
        }
    }
})

export const {Addition}=CompleteData.actions;
export default CompleteData.reducer