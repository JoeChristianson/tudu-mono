import { useState } from "react"
import styles from "./index.module.scss"
import LabelAndInput from "../../../../generics/LabelAndInput"
import Input from "../../../../Input"
import Button from "../../../../Button"
import Label from "../../../../generics/Form/Label"
import { useAppDispatch } from "../../../../../app/hooks"
import { addCategory } from "../../../../../features/auth/authSlice"

type Props = {

}

const AddCategory = ({}: Props) => {

    const [isOpen,setIsOpen] = useState(false)
    const [category,setCategory] = useState("")
    const dispatch = useAppDispatch()
    const handleOpen = ()=>{
        console.log("opening")
        setIsOpen(true)
    }

    if(!isOpen){
        return<Button className={styles.button} onClick={handleOpen}>+</Button>
    }

    const handleEnter = (e:any)=>{
        const key = e.key
        if(key!=="Enter"){
            return
        }
        dispatch(addCategory(category))
        setCategory("")
        setIsOpen(false)
    }

    return <div className={styles.div}>
        <Input
    placeholder="Category Name"
onChange={(e)=>setCategory(e.target.value)}
        value={category}
        onKeyDown={handleEnter}></Input>
        </div>
}

export default AddCategory