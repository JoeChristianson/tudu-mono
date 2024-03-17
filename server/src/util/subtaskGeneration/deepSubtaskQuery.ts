import { ITask } from "../../models/Task";
import getParentTask from "./getParentTask";
import getSisterTasksNames from "./getSisterTasksNames";

const deepSubtaskQuery = async ({task}:{task:ITask})=>{
    const taskName = task.name
    const parent = await getParentTask({task})
    const parentTaskName = parent.name
    const sisterTasksNames = await getSisterTasksNames({task,parentTask:parent})
    const query = `I have to do the following task: ${taskName}. It is the subtask of ${parentTaskName}. I need you to break down the task of ${taskName} into subtasks and put those subtasks into an array. These are the sister subtasks of ${taskName}, so they should not be part of the new subtasks that are generated for ${taskName}: ${sisterTasksNames}`
    return query
}

export default deepSubtaskQuery