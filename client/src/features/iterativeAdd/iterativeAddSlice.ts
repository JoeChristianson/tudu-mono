import { createSlice } from "@reduxjs/toolkit";
import { IntendedIterative } from "../../types/Iterative";


interface IterativeAddState {
    intendedIterative:IntendedIterative
}

const initialState:IterativeAddState = {
    intendedIterative:{
        name:"",
        due:true,
        nextDue:(new Date()).toISOString(),
        dayGap:1
    }
}

const iterativeAddSlice = createSlice({
    name:"iterativeadd",
    initialState,
    reducers:{
        editIntendedIterative:(state,action)=>{
            const changeObject = action.payload
            state.intendedIterative =  {...state.intendedIterative,...changeObject}
        },
        resetIntendedIterative: (state)=>{
            state.intendedIterative = initialState.intendedIterative
        }
    }
})

export const {editIntendedIterative,resetIntendedIterative} = iterativeAddSlice.actions

export default iterativeAddSlice.reducer