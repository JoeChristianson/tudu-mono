import { createAsyncThunk } from "@reduxjs/toolkit";
import { fexPost } from "../../../utils/api/fex";



const generateTips = createAsyncThunk("tasks/generateTips",async ({taskId}:{taskId:string})=>{
    const data = await fexPost("/resources",{taskId})
    console.log({data})
    return {...data,taskId}
})

export default generateTips