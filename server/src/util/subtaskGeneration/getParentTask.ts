import Task, { ITask } from "../../models/Task"

interface Args {
    task:ITask
}

const getParentTask = async ({task}:Args)=>{
    const parentId = task.parentTask
    const parentTask = await Task.findById(parentId)
    if(!parentTask){
        throw new Error("No parent task")
    }
    return parentTask
}

export default getParentTask