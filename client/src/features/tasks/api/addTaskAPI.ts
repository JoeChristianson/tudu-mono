import { IntendedTask } from "../../../types/Task"
import { fexPost } from "../../../utils/api/fex"



const addTaskAPI = async ({task,userId,jwt}:{task:IntendedTask,userId:string,jwt:string})=>{
    const data = await fexPost("/tasks/add",{task,userId,jwt})
    return data
}


export default addTaskAPI