import Task from "../../../types/Task"

const createNewTask = ({name,_id}:{name:string,_id:string})=>{
    const task:Task = {
        _id,
        name,
        status:"incomplete"
    }
    return task
}

export default createNewTask