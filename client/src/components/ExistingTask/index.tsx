import { useDispatch } from "react-redux"
import Task from "../../types/Task"
import styles from "./index.module.scss"
import { completeTask, setDetailedTaskId } from "../../features/tasks/tasksSlice"
import TaskButtons from "../TaskButtons"
import CheckBoxContainer from "../CheckBoxContainer"

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

export default ExistingTask