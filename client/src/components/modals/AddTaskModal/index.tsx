import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { RootState } from "../../../app/store"
import { closeModal } from "../../../features/modal/modalSlice"
import { resetIntendedTask } from "../../../features/taskadd/taskaddSlice"
import addTaskAPI from "../../../features/tasks/api/addTaskAPI"
import { addFullTask } from "../../../features/tasks/tasksSlice"
import AddTaskRow from "../../AddTaskRow"
import Button from "../../Button"
import Input from "../../Input"
import ManageCategories from "./ManageCategories"
import TaskName from "./TaskName"
import styles from "./index.module.scss"

type Props = {

}

const AddTaskModal = ({}: Props) => {
    const dispatch = useAppDispatch()
    const intendedTask = useAppSelector((state:RootState)=>{
        return state.taskAdd.intendedTask
    })
    const credentials = useAppSelector((state:RootState)=>{
        return state.auth.credentials
    })
    const userId = credentials?.user._id
    const jwt = credentials?.jwt

    
    const handleSubmit = async ()=>{
        console.log({userId,jwt,intendedTask})       
        if(!userId||!jwt){
            return
        } 
        const res = await addTaskAPI({task:intendedTask,userId,jwt})
        if(res.success){
            dispatch(resetIntendedTask())
            dispatch(addFullTask(res.task))
            dispatch(closeModal())
        }        
    }

    
    return <div className={styles.div}>
        <TaskName></TaskName>
        <ManageCategories></ManageCategories>
        <Button onClick={handleSubmit}>Submit</Button>
    </div>
}

export default AddTaskModal