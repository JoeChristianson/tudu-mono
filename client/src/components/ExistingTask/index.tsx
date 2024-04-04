import { useDispatch } from "react-redux"
import Task from "../../types/Task"
import styles from "./index.module.scss"
import {setDetailedTaskId } from "../../features/tasks/tasksSlice"
import TaskButtons from "../TaskButtons"
import CheckBoxContainer, { IterativeCheckBoxContainer } from "../CheckBoxContainer"
import Iterative from "../../types/Iterative"

type Props = {
    task:Task
}

const ExistingTask = ({task}: Props) => {
    const dispatch  = useDispatch()
    const {status,name} = task
    const id = task._id

    const className = `${styles.div} ${styles[status]}`

    const handleClick = ()=>{
        dispatch(setDetailedTaskId({id}))
    }

    return <div className={className}>
        <CheckBoxContainer
        task={task}
        ></CheckBoxContainer>
        <div onClick={handleClick} className={styles.right}>
        <div>{task.name}
        </div>
        <TaskButtons taskId={id}></TaskButtons>
        </div>
    </div>
}

type IterativeProps = {
    iterative:Iterative
}

export const ExistingIterative = ({iterative}: IterativeProps) => {
    const dispatch  = useDispatch()
    const {status,name} = iterative
    const id = iterative._id

    const className = `${styles.div} ${styles[status||"incomplete"]}`

    const handleClick = ()=>{
        dispatch(setDetailedTaskId({id}))
    }

    return <div className={className}>
        <IterativeCheckBoxContainer iterative={iterative}></IterativeCheckBoxContainer>
        <div onClick={handleClick} className={styles.right}>
        <div>{name}
        </div>
        <TaskButtons taskId={id}></TaskButtons>
        </div>
    </div>
}


export default ExistingTask