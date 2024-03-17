import { createAsyncThunk } from "@reduxjs/toolkit";
import { fexPost } from "../../../utils/api/fex";



const generateSubtasks = createAsyncThunk("tasks/generateSubtasks",async ({taskId}:{taskId:string})=>{
    const data = await fexPost("/tasks/generate-subtasks",{id:taskId})
    const subTasks = data.subtasks
    return {subTasks,taskId}
})

export default generateSubtasks