import Task from "../../../types/Task"

interface Args {
    _id:string
    tasks:Task[]
}

const setTaskAsComplete = ({_id,tasks}:Args)=>{
    tasks = [...tasks]
    for (let task of tasks){
        if (task._id===_id){
            task.status = "complete"
            return tasks
        }
    }
    return tasks
}

export default setTaskAsComplete