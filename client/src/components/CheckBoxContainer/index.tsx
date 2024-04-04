import Iterative from "../../types/Iterative"
import Task from "../../types/Task"
import CheckBox, { IterativeCheckBox } from "../CheckBox"
import styles from "./index.module.scss"

type Props = {
    task:Task
}

const CheckBoxContainer = ({task}: Props) => {
    return <div className={styles.div}>
        <CheckBox task={task}></CheckBox>
    </div>
}

type IterativeProps = {
    iterative:Iterative
}

export const IterativeCheckBoxContainer = ({iterative}: IterativeProps) => {
    return <div className={styles.div}>
        <IterativeCheckBox iterative={iterative}></IterativeCheckBox>
    </div>
}

export default CheckBoxContainer