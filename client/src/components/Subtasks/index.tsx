import Task from "../../types/Task"
import AddSubTasksButton from "./AddSubTasksButton"
import SubTasksList from "./SubTasksList"
import styles from "./index.module.scss"

type Props = {
    task:Task
}

const Subtasks = ({task}: Props) => {
    
    const {subTasks} = task

    const hasSubtasks = subTasks&&subTasks?.length>0

    return <div>
        <h4>Subtasks</h4>
        {hasSubtasks&&<SubTasksList subTasks={subTasks}/>}
        {!hasSubtasks&&<AddSubTasksButton taskId={task._id}></AddSubTasksButton>}
    </div>
}

export default Subtasks