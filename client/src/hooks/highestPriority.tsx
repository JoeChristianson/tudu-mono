import { useAppSelector } from "../app/hooks"
import { RootState } from "../app/store"
import Task from "../types/Task"

const highestPriority = ()=>{
    const tasks = useAppSelector((state:RootState)=>state.tasks.tasks)
    const highestPriority = tasks.reduce((a:number,b:Task)=>{
        if(b.priority&&b.priority>a){
            return b.priority
        }
        return a
    },0)
    return highestPriority
}

export default highestPriority