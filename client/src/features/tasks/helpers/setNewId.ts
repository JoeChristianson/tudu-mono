import Task from "../../../types/Task"

interface Args {
    id:string
    newId:string
    tasks:Task[]
}

const setNewId = ({id,tasks,newId}:Args)=>{
    tasks = [...tasks]
    for (let task of tasks){
        if (task._id===id){
            task._id = newId
            return tasks
        }
    }
    return tasks
}

export default setNewId