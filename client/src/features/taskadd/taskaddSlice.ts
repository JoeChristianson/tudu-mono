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
        categories:[],
    }
}

const taskAddSlice = createSlice({
    name:"taskadd",
    initialState,
    reducers:{
        editIntendedTask:(state,action)=>{
            const changeObject = action.payload
            state.intendedTask = {...state.intendedTask,...action.payload}
        },
        resetIntendedTask:(state)=>{
            state.intendedTask = initialState.intendedTask
        },
        togglePrioritize:(state,action)=>{
            const topPriority = action.payload.topPriority
            const currentPriority = state.intendedTask.priority
            if(currentPriority){
                state.intendedTask.priority = 0
                return
            }
            state.intendedTask.priority = topPriority+1
        }
    }
})

export const {editIntendedTask,resetIntendedTask,togglePrioritize} = taskAddSlice.actions
export default taskAddSlice.reducer