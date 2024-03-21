import { fexPut } from "../../../utils/api/fex"

interface Args {
    taskId:string
    priority:number
}

const prioritizeTaskAPI = ({taskId,priority}:Args)=>{
    const res = fexPut("/tasks/priority/"+taskId,{priority})
    return res
}

export default prioritizeTaskAPI