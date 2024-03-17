import { fexPost } from "../utils/api/fex"

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

export default addNewTaskAPI