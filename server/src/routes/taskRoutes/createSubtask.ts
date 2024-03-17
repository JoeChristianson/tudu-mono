import Task from "../../models/Task"

interface Args {
    parentId:string
    name:string
    userId:string
}

const createSubtask = async ({parentId,name,userId}:Args)=>{
    const subtask = await Task.create({name,parentTask:parentId,user:userId})
    const task = await Task.findById(parentId)
    if(!task){
        throw new Error("No task matching that id")
    }
    task.subTasks.push(subtask)
    await task.save()
    return subtask
}

export default createSubtask