import { createAsyncThunk } from "@reduxjs/toolkit";
import { fexPut } from "../../../utils/api/fex";

interface Args {
    taskId:string
    notes:string
}

const editNotes = createAsyncThunk("tasks/editNotes",async ({taskId,notes}:Args)=>{
    console.log("editing")
    const data = await fexPut("/tasks/notes",{taskId,notes})
    return {...data,taskId}
})

export default editNotes