import Task, { ITask } from "../../models/Task"

interface Args {
    task:ITask
    parentTask:ITask
}

const getSisterTasksNames = async ({task,parentTask}:Args)=>{
    const allSubtasks = await Task.find({parentTask:parentTask._id})
    const allTaskNames = allSubtasks.map(a=>a.name)
    return allTaskNames.filter(a=>a!==task.name).join(", ") 
}

export default getSisterTasksNames
