import Task from "../../../types/Task";

const sortByPriority = ({tasks}:{tasks:Task[]})=>{
    const sortedTasks = [...tasks].sort((a,b)=>{
        return (b?.priority||0) - (a?.priority||0)
    })
    return sortedTasks
}

export default sortByPriority