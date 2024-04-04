import Task from "../../../types/Task"
import { DynamicAnyObject } from "../../../types/generic"
import proxyToObject from "../../../utils/proxyToObject"

interface Args {
    id:string
    tasks:Task[]
    payload:DynamicAnyObject
}

const updateTask = ({id,tasks,payload}:Args)=>{
    const newTasks = proxyToObject(tasks)
    for (let task of newTasks){
        if (task._id===id){
            task = {...task,...payload}
        }
    }
    return newTasks
}

export default updateTask