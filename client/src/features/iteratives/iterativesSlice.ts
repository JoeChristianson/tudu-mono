import { createSlice } from "@reduxjs/toolkit";
import Iterative from "../../types/Iterative";
import fetchIteratives from "../tasks/api/fetchIteratives";
import setIterativeAsComplete from "./helpers/setIterativeAsComplete";
import { completeIterativeAPI } from "../../api/iteratives";
import addIterative from "./helpers/addIterative";





interface IterativesState {
    iteratives:Iterative[]
    loading:boolean
    error:null|string
}

const initialState:IterativesState = {
    iteratives:[],
    loading:true,
    error:null
}

const iterativesSlice = createSlice({
    name:"iteratives",
    initialState,
    reducers:{
        completeIterative: (state,action)=>{
            const {userId,jwt,iterativeId} = action.payload
            const iteratives = state.iteratives
            const newIteratives = setIterativeAsComplete({_id:iterativeId,iteratives})
            state.iteratives = newIteratives
            completeIterativeAPI({iterativeId,userId,jwt})
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchIteratives.pending,(state:IterativesState)=>{
            state.loading = true
        })
        .addCase(fetchIteratives.fulfilled,(state:IterativesState,action)=>{
            console.log("fulfilled")
            state.loading = false
            const iteratives = action.payload
            state.iteratives = iteratives
        })
        .addCase(fetchIteratives.rejected,(state:IterativesState,action)=>{
            state.loading = false
            state.error = action.error.message||"undefined error"
        })
        .addCase(addIterative.pending,(state:IterativesState)=>{
            state.loading = true
        })
        .addCase(addIterative.fulfilled,(state:IterativesState,action)=>{
            state.loading = false
            const {iterative} = action.payload
            state.iteratives = [...state.iteratives,iterative]
        })
    }
})

export const {completeIterative} = iterativesSlice.actions

export default iterativesSlice.reducer