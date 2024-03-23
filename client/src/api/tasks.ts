import { fexDelete, fexPost } from "../utils/api/fex"

export const getAllTasks = ()=>{
    
}


interface Args {
    name:string
    userId:string
    jwt:string
}

export const addNewTaskAPI = async ({name,userId,jwt}:Args)=>{
    try{
        
        const res = await fexPost("/tasks",{name,userId,jwt})
        console.log({res})
        return res
    }catch(err){
        console.log({err})
    }
}

interface DeleteArgs {
    taskId:string
    jwt:string
    userId:string
}

export const deleteTaskAPI = async ({taskId,jwt,userId}:DeleteArgs)=>{
    try{
        const res = await fexDelete("/tasks/"+taskId,{jwt,userId})
        return res
    }catch(err){
        console.log({err})
    }
}

export default addNewTaskAPI