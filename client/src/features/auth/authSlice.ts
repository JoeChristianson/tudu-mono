import { createSlice } from "@reduxjs/toolkit"
import login from "./api/login"
import register from "./api/register"
import Credentials from "../../types/Credentials"

interface AuthState {
    loading:boolean
    loggedIn:boolean
    credentials:Credentials|null
    errorMessage:null|string
    authIntention:"login"|"register"
}

const initialState: AuthState = {
    loading:false,
    loggedIn:false,
    credentials:null,
    errorMessage:null,
    authIntention:"login"

}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setAuthIntention:(state,action)=>{
            state.authIntention = action.payload.authIntention
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(login.pending,(state:AuthState)=>{
            state.loading = true
        })
        .addCase(login.fulfilled,(state:AuthState,action:any)=>{
            state.loading = false
            const data = action.payload
            const success = data.success
            if(!success){
                state.errorMessage = data.errorMessage
                return
            }
            state.credentials = data.credentials
            state.loggedIn = true
        })
        .addCase(login.rejected,(state:AuthState)=>{
            state.loading = false
            state.errorMessage = "Server Error"
        })
        .addCase(register.pending,(state:AuthState)=>{
            state.loading = true
        })
        .addCase(register.fulfilled,(state:AuthState,action:any)=>{
            state.loading = false
            const data = action.payload
            const success = data.success
            if(!success){
                state.errorMessage = data.errorMessage
                return
            }
            state.loggedIn = true
            state.credentials = data.credentials
        })
        .addCase(register.rejected,(state:AuthState)=>{
            state.loading = false
            state.errorMessage = "Server Error"
        })
    }  
})

export const {setAuthIntention} = authSlice.actions
export default authSlice.reducer