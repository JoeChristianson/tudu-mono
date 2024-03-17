import { createAsyncThunk } from "@reduxjs/toolkit";
import { fexGet } from "../../../utils/api/fex";

const fetchTasks = createAsyncThunk("tasks/fetchTasks",
    async ({userId}:{userId:string})=>{
        const data = await fexGet(`/tasks/${userId}`)
        return data.tasks
    }
)

export default fetchTasks