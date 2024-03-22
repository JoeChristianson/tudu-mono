import { createSlice } from "@reduxjs/toolkit";
import { IntendedTask } from "../../types/Task";



interface TaskAddState {
    intendedTask:IntendedTask
}

const initialState:TaskAddState = {
    intendedTask:{
        name:"",
        status:"incomplete",
        resources:[],
        tips_and_tricks:[],
        subTasks:[],
        notes:"",
        priority:0,
        categories:[]
    }
}

const taskAddSlice = createSlice({
    name:"taskadd",
    initialState,
    reducers:{
        editIntendedTask:(state,action)=>{
            const changeObject = action.payload
            console.log({changeObject})
            console.log({action})
            state.intendedTask = {...state.intendedTask,...action.payload}
        },
        resetIntendedTask:(state)=>{
            state.intendedTask = initialState.intendedTask
        }
    }
})

export const {editIntendedTask,resetIntendedTask} = taskAddSlice.actions
export default taskAddSlice.reducer