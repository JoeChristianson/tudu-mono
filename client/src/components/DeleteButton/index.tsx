import styles from "./index.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../Button"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

type Props = {
    taskId:string
}

const DeleteButton = ({taskId}: Props) => {

    const handleClick = ()=>{
        console.log({taskId})
    }

return <Button onClick={handleClick} className={styles.button}>
        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
    </Button>
}

export default DeleteButton