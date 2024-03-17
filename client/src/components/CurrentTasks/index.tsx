import { useSelector } from "react-redux"
import styles from "./index.module.scss"
import { RootState } from "../../app/store"
import Task from "../../types/Task"
import ExistingTask from "../ExistingTask"
import { useEffect } from "react"
import fetchTasks from "../../features/tasks/api/fetchTasks"
import { useAppDispatch, useAppSelector } from "../../app/hooks"


const CurrentTasks = () => {
    const authState = useAppSelector((state:RootState)=>state.auth)
    const userId = authState.credentials?.user?._id
    const {tasks} = useSelector((state:RootState)=>state.tasks)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        console.log({userId})
        if(!userId){
            return
        }
        dispatch(fetchTasks({userId}))
    },[])

    if(!tasks){
        return<div></div>
    }

    return <div className={styles.div}>
        {tasks.map((task:Task,index:number)=>{
            return<ExistingTask
            task={task}
            key={index}
            ></ExistingTask>
        })}
    </div>
}

export default CurrentTasks