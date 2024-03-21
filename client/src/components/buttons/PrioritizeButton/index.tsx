import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../../Button"
import styles from "./index.module.scss"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { useAppDispatch } from "../../../app/hooks"
import { prioritizeTask } from "../../../features/tasks/tasksSlice"

type Props = {
    taskId:string
}

const PrioritizeButton = ({taskId}: Props) => {

    const dispatch = useAppDispatch()

    const handleClick = ()=>{
        dispatch(prioritizeTask(taskId))        
    }

return <Button onClick={handleClick} className={styles.button}>
    <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
</Button>

}

export default PrioritizeButton