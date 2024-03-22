import { createSlice } from "@reduxjs/toolkit"
import login from "./api/login"
import register from "./api/register"
import Credentials from "../../types/Credentials"
import getLocalCredentials from "../../utils/localstorage/getLocalCredentials"
import setLocalCredentials from "../../utils/localstorage/setLocalCredentials"
import addCategoryForUser from "./api/addCategoryForUser"

const localCredentials = getLocalCredentials()

interface AuthState {
    loading:boolean
    loggedIn:boolean
    credentials:Credentials|null
    errorMessage:null|string
    authIntention:"login"|"register"
}

const initialState: AuthState = {
    loading:false,
    loggedIn:localCredentials?true:false,
    credentials:localCredentials,
    errorMessage:null,
    authIntention:"login"

}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setAuthIntention:(state,action)=>{
            state.authIntention = action.payload.authIntention
        },
        addCategory:(state,action)=>{
            const category = action.payload
            if(!state.credentials?.user.categories){
                return
            }
            const categories = state.credentials.user.categories
            state.credentials.user.categories = [...categories,action.payload]
            const userId = state.credentials.user._id
            const jwt = state.credentials.jwt
            addCategoryForUser({userId,jwt,category})
            setLocalCredentials({credentials:state.credentials})
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
            const credentials = data.credentials
            setLocalCredentials({credentials})

            state.credentials = credentials
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
            const credentials = data.credentials
            setLocalCredentials({credentials})
            state.credentials = credentials

        })
        .addCase(register.rejected,(state:AuthState)=>{
            state.loading = false
            state.errorMessage = "Server Error"
        })
    }  
})

export const {setAuthIntention,addCategory} = authSlice.actions
export default authSlice.reducer