import { useSelector } from "react-redux"
import styles from "./index.module.scss"
import { RootState } from "../../app/store"
import Task from "../../types/Task"
import ExistingTask, { ExistingIterative } from "../ExistingTask"
import { useEffect } from "react"
import fetchTasks from "../../features/tasks/api/fetchTasks"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import sortByPriority from "./helpers/sortByPriority"
import filterByCategories from "./helpers/filterByCategories"
import fetchIteratives from "../../features/tasks/api/fetchIteratives"
import Iterative from "../../types/Iterative"


const CurrentTasks = () => {
    const authState = useAppSelector((state:RootState)=>state.auth)
    const categories = useAppSelector((state:RootState)=>state.categories.selectedCategories)
    const userId = authState.credentials?.user?._id
    const {tasks} = useSelector((state:RootState)=>state.tasks)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        if(!userId){
            return
        }
        dispatch(fetchTasks({userId}))
    },[])

    if(!tasks){
        return<div></div>
    }

    const sortedTasks = sortByPriority({tasks})
    const filteredTasks = filterByCategories({tasks:sortedTasks,categories})


return <div className={styles.div}>
        {filteredTasks.map((task:Task,index:number)=>{
            return<ExistingTask
            task={task}
            key={index}
            ></ExistingTask>
        })}
    </div>
}

export const CurrentIteratives = () => {
    const authState = useAppSelector((state:RootState)=>state.auth)
    const userId = authState.credentials?.user?._id
    const {iteratives} = useSelector((state:RootState)=>state.iteratives)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        if(!userId){
            return
        }
        dispatch(fetchIteratives({userId}))
    },[])

    if(!iteratives){
        return<div></div>
    }

    const filteredIteratives = iteratives.filter((i)=>i.due)

return <div className={styles.div}>
        {filteredIteratives.map((iterative:Iterative,index:number)=>{
            return<ExistingIterative
            iterative={iterative}
            key={index}
            ></ExistingIterative>
        })}
    </div>
}


export default CurrentTasks