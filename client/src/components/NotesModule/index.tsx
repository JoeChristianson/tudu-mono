import styles from "./index.module.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import editNotes from "../../features/tasks/api/editNotes"
import getTask from "../../utils/getTask"
import DebouncedTextArea from "../DebouncedTextArea"
import ModuleCont from "../ModuleCont"

const NotesModule = () => {
    const {tasks,detailedTaskId} = useAppSelector(state=>state.tasks)
    const dispatch = useAppDispatch()    
    if(!detailedTaskId||!tasks){
        return<ModuleCont><h3 style={{textAlign:"center"}}>Click on Task to Open Details</h3></ModuleCont>
    }
    
    const task = getTask({tasks,detailedTaskId})


    if(!task){
        return<ModuleCont><h3>Click on Task to Open Details</h3></ModuleCont>
    }

    const notes = task.notes

    const handleChange = (text:string)=>{
        dispatch(editNotes({taskId:detailedTaskId,notes:text}))        
    }

return <ModuleCont>
        <div className={styles['text-cont']}>

            <DebouncedTextArea
            key={detailedTaskId}
            value={notes}
            handleChange={handleChange}
            ></DebouncedTextArea>
            </div>
    </ModuleCont>
}

export default NotesModule