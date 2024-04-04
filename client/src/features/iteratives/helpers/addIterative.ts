import { createAsyncThunk } from "@reduxjs/toolkit";
import { fexPost } from "../../../utils/api/fex";

interface Args1 {
    userId:string
    jwt:string
    name:string
    repetition:string
}

const addIterative = createAsyncThunk("iteratives/add",async ({userId,jwt,name,repetition}:Args1)=>{
    try{
        console.log("about to post")
        const res = await fexPost("/iteratives/"+userId,{repetition,jwt,name})
        console.log({res})
        return res
    }catch(err){
        throw new Error("didn't work")
    }
})

export default addIterative