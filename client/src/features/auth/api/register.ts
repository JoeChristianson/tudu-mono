import { createAsyncThunk } from "@reduxjs/toolkit";
import { fexPost } from "../../../utils/api/fex";

interface Args {
    email:string
    password:string
    confirmPassword:string
    name:string
}

const register = createAsyncThunk("auth/register",
async({email,password,name,confirmPassword}:Args)=>{
    const data = await fexPost("/auth/register",{email,password,name,confirmPassword})
    return data
})

export default register