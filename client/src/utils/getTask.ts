import Task from "../types/Task"

interface Args {
    tasks:Task[]
    detailedTaskId:string
}

const getTask = ({tasks,detailedTaskId}:Args)=>{
    for (let task of tasks){
        if(task._id===detailedTaskId){
            return task
        }
    }
    return null
}

export default getTask