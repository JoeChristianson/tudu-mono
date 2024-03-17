import styles from "./index.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../Button"
import { faLightbulb, faTrash } from "@fortawesome/free-solid-svg-icons"
import { useAppDispatch } from "../../app/hooks"
import generateTips from "../../features/tasks/api/generateTips"

type Props = {
    taskId:string
}

const GenerateTipsButton = ({taskId}: Props) => {

    const dispatch = useAppDispatch()
    const handleClick = ()=>{
        dispatch(generateTips({taskId}))
    }

return <Button onClick={handleClick} className={styles.button}>
        <FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon>
    </Button>
}

export default GenerateTipsButton