import styles from "./index.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../../Button"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { useAppDispatch } from "../../../app/hooks"
import { setDetailedTaskId } from "../../../features/tasks/tasksSlice"

type Props = {
    taskId:string
}

const ViewDetailsButton = ({taskId}: Props) => {
    const dispatch = useAppDispatch()
    const onClick = ()=>{
        dispatch(setDetailedTaskId({id:taskId}))
    }

    return <Button onClick={onClick} className={styles.button}>
        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
    </Button>
}

export default ViewDetailsButton