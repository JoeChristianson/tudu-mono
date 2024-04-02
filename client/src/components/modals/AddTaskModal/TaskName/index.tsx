import { useDispatch } from "react-redux"
import { useAppSelector } from "../../../../app/hooks"
import { RootState } from "../../../../app/store"
import Input from "../../../Input"
import Label from "../../../generics/Form/Label"
import styles from "./index.module.scss"
import { editIntendedTask } from "../../../../features/taskadd/taskaddSlice"
import LabelAndInput from "../../../generics/LabelAndInput"

type Props = {

}

const TaskName = ({}: Props) => {

    const name = useAppSelector((s:RootState)=>{
        return s.taskAdd.intendedTask.name
    })

    const dispatch = useDispatch()


    return <div className={styles.div}>
        <LabelAndInput>
        <Input autoFocus={true} placeholder="Task Name" onChange={(e)=>dispatch(editIntendedTask({name:e.target.value}))} value={name}></Input>
        </LabelAndInput>
    </div>
}

export default TaskName