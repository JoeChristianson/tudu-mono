import { ITask } from "../../models/Task"

interface Args {
    task:ITask
    additionalNotes:string
}

const createPopulateQuery = ({task,additionalNotes}:Args)=>{
    const taskName = task.name
    const res = `
    Okay, I'm going to give you a task. I want you to respond with a json object with the following fields: subtasks, tips, requiredToolsAndmaterials, estimatedCompletionTime, difficulty, pointValue, urgency, textAssets, costEstimate. Give the estimated completion time as an decimal hour number, not a range. The cost estimate should be a number. The difficulty and urgency will be on a range of 1-10. The points will correspond to the difficulty, but will be exponential, specifically, it'll be 5^difficulty. For textAssets, you will produce useful text assets for the task, for example it could be a piece of code, an email template, a keyword list (if a subtask is create a keyword list). Here is the task: ${taskName}. HERE IS ADDITIONAL INFO ON THE TASK: ${additionalNotes}.`
    return res
}

export default createPopulateQuery