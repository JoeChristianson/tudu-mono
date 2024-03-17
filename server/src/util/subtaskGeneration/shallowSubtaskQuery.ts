const shallowSubtaskQuery = (taskName:string)=>{
    return     `I have to do the following task: ${taskName}. I need you to break down the task of ${taskName} into subtasks and put those subtasks into an array`
}

export default shallowSubtaskQuery