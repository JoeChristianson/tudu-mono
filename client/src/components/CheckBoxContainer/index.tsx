import Task from "../../types/Task"
import CheckBox from "../CheckBox"
import styles from "./index.module.scss"

type Props = {
    task:Task
}

const CheckBoxContainer = ({task}: Props) => {
    return <div className={styles.div}>
        <CheckBox task={task}></CheckBox>
    </div>
}

export default CheckBoxContainer