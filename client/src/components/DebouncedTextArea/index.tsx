import { useDebounce } from 'use-debounce';
import { useEffect, useState } from "react"
import styles from "./index.module.scss"

type Props = {
value?:string
handleChange:(arg0:string)=>void
delay?:number
}

const DebouncedTextArea = ({value,handleChange,delay}: Props) => {
    
    const [text,setText] = useState(value||"")
    const [initialized,setInitialized] = useState(false)
    const [delayedText] = useDebounce(text,delay||1000)
    useEffect(()=>{
        if(!initialized){
            setInitialized(true)
            return
        }
        handleChange(delayedText)
    },[delayedText])


    return <textarea value={text} onChange={(e)=>setText(e.target.value)} className={styles.textarea}>
    
    </textarea>
}

export default DebouncedTextArea