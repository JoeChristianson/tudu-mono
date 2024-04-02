import styles from "./index.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../Button"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { deleteTask } from "../../features/tasks/tasksSlice"
import { deleteTaskAPI } from "../../api/tasks"
import { RootState } from "../../app/store"

type Props = {
    taskId:string
}

const DeleteButton = ({taskId}: Props) => {
    const credentials = useAppSelector((state:RootState)=>{
        return state.auth.credentials
    })
    const userId = credentials?.user._id
    const jwt = credentials?.jwt
    const dispatch = useAppDispatch()

    const handleClick = ()=>{
        if(!userId||!jwt){
            return
        }
       dispatch(deleteTask(taskId)) 
        deleteTaskAPI({taskId,jwt,userId})
    }

return <Button onClick={handleClick} className={styles.button}>
        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
    </Button>
}

export default DeleteButton