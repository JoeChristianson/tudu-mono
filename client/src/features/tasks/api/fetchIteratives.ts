import { createAsyncThunk } from "@reduxjs/toolkit";
import { fexGet } from "../../../utils/api/fex";


const fetchIteratives = createAsyncThunk("iteratives/fetchIteratives",
    async ({userId}:{userId:string})=>{
        const data = await fexGet(`/iteratives/${userId}`)
        return data.iteratives
    }
)

export default fetchIteratives