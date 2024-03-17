import Task from "../../../types/Task"
import styles from "./index.module.scss"

type Props = {
    subTasks:Task[]
}

const SubTasksList = ({subTasks}: Props) => {
    return <ul>
        {subTasks.map((sub,index)=>{
            const {name} = sub
            return<li key={index}>
                {name}
            </li>
        })}
    </ul>
}

export default SubTasksList