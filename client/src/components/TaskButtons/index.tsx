import DeleteButton from "../DeleteButton"
import GenerateTipsButton from "../GenerateTipsButton"
import PrioritizeButton from "../buttons/PrioritizeButton"
import ViewDetailsButton from "../buttons/ViewDetailsButton"
import styles from "./index.module.scss"

type Props = {
    taskId:string
}

const TaskButtons = ({taskId}: Props) => {
    return <div className={styles.div}>
        <PrioritizeButton
        taskId={taskId}
        ></PrioritizeButton>
        <GenerateTipsButton
        taskId={taskId}
        ></GenerateTipsButton>
        <ViewDetailsButton
        taskId={taskId}
        ></ViewDetailsButton>
        <DeleteButton
        taskId={taskId}
        ></DeleteButton>
    </div>
}

export default TaskButtons