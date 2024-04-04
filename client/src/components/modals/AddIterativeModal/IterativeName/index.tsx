import { useDispatch } from "react-redux"
import { useAppSelector } from "../../../../app/hooks"
import { RootState } from "../../../../app/store"
import Input from "../../../Input"
import styles from "./index.module.scss"
import LabelAndInput from "../../../generics/LabelAndInput"
import { editIntendedIterative } from "../../../../features/iterativeAdd/iterativeAddSlice"

type Props = {

}

const TaskName = ({}: Props) => {

    const name = useAppSelector((s:RootState)=>{
        return s.iterativeAdd.intendedIterative.name
    })

    const dispatch = useDispatch()


    return <div className={styles.div}>
        <LabelAndInput>
        <Input autoFocus={true} placeholder="Task Name" onChange={(e)=>dispatch(editIntendedIterative({name:e.target.value}))} value={name}></Input>
        </LabelAndInput>
    </div>
}

export default TaskName