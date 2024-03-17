import { ChangeEvent, KeyboardEvent, useState } from "react"
import styles from "./index.module.scss"
import { useDispatch } from "react-redux"
import { addTask, setId } from "../../features/tasks/tasksSlice"
import addNewTaskAPI from "../../api/tasks"
import createId from "../../utils/createId"
import { useAppSelector } from "../../app/hooks"
import { RootState } from "../../app/store"

type Props = {
}

const AddTaskRow = ({}: Props) => {

    const [text,setText] = useState("")
    const authState = useAppSelector((state:RootState)=>state.auth)
    const userId = authState.credentials?.user?._id
    const jwt = authState.credentials?.jwt
    const dispatch = useDispatch()
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        const text = e.target.value
        setText(text)
    }
    
    const handleEnterKeyPress = async () => {
        const id = createId()
        console.log({userId,jwt})
        if(!userId||!jwt){
            return
        }
        dispatch(addTask({name:text,id}))
        const res = await addNewTaskAPI({name:text,userId,jwt})
        const newId = res.id
        dispatch(setId({id,newId}))
        setText("")
      };

    const handleKeyPress = (event:KeyboardEvent<HTMLInputElement>)=>{
        const {key} = event
        switch(key){
            case "Enter":{
                handleEnterKeyPress()
            }
        }
    }


    return <div className={styles.div}>
        <input onChange={handleChange} value={text}
        onKeyDown={handleKeyPress}
        ></input>
    </div>
}

export default AddTaskRow