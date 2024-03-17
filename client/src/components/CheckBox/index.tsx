import { useState } from "react"
import styles from "./index.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import Task from "../../types/Task"
import { completeTask } from "../../features/tasks/tasksSlice"
import { useAppDispatch } from "../../app/hooks"

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