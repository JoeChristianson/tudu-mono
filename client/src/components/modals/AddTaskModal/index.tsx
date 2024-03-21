import AddTaskRow from "../../AddTaskRow"
import styles from "./index.module.scss"

type Props = {

}

const AddTaskModal = ({}: Props) => {
    return <div className={styles.div}>
<AddTaskRow></AddTaskRow>
    </div>
}

export default AddTaskModal