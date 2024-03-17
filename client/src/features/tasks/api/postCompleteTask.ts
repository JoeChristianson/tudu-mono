import { fexPut } from "../../../utils/api/fex"

const postCompleteTask = async ({taskId}:{taskId:string})=>{
    try{
        const res = await fexPut("/tasks/status",{taskId,status:"complete"})
        console.log({res})
    }catch(err){
        console.log({err})
    }
}

export default postCompleteTask