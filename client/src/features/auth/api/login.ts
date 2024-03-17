import { createAsyncThunk } from "@reduxjs/toolkit";
import { fexPost } from "../../../utils/api/fex";

interface Args {
    email:string
    password:string
}

const login = createAsyncThunk("auth/login",
async({email,password}:Args)=>{
    console.log("logging it")
    const data = await fexPost("/auth/login",{email,password})
    console.log({data})
    return data
})

export default login