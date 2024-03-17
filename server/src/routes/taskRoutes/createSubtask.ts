import Task from "../../models/Task"

interface Args {
    parentId:string
    name:string
}

const createSubtask = async ({parentId,name}:Args)=>{
    const subtask = await Task.create({name,parentTask:parentId})
    const task = await Task.findById(parentId)
    if(!task){
        throw new Error("No task matching that id")
    }
    task.subTasks.push(subtask)
    await task.save()
    return subtask
}

export default createSubtask