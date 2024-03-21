import Task from "../../../types/Task";

const getHighestPriority = ({tasks}:{tasks:Task[]})=>{
    const highestPriorityTask = tasks.reduce((a,b)=>{
        if ((b.priority||0)>(a?.priority||0)){
            return b
        }
        return a
    },tasks[0])
    const highestPriority = highestPriorityTask?.priority||0
    return highestPriority
}

export default getHighestPriority