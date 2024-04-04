import styles from "./index.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import Task from "../../types/Task"
import { completeTask } from "../../features/tasks/tasksSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { completeIterative } from "../../features/iteratives/iterativesSlice"
import { RootState } from "../../app/store"
import getAuthorization from "../../utils/auth/getAuthorization"

interface Props {
    task:Task
}



const CheckBox = ({task}:Props)=>{
    const dispatch  = useAppDispatch()
    const id = task._id
    const checked = task.status==="complete"
    
    const handleClick = ()=>{
        dispatch(completeTask(id))
    }

    return<div onClick={handleClick} className={styles.div}>
        <div style={checked?{}:{opacity:0}}>
        {<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>}
        </div>
        </div>
}

export default CheckBox

interface IterativeProps {
    iterative:any
}

export const IterativeCheckBox = ({iterative}:IterativeProps)=>{
    const dispatch  = useAppDispatch()
    const credentials = useAppSelector((state:RootState)=>state.auth.credentials)
    const {userId,jwt} = getAuthorization({credentials})
    const iterativeId = iterative._id
    const checked = iterative.status==="complete"
    
    const handleClick = ()=>{
        dispatch(completeIterative({iterativeId,userId,jwt}))
    }


    return<div onClick={handleClick} className={styles.div}>
        <div style={checked?{}:{opacity:0}}>
        {<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>}
        </div>
        </div>
}