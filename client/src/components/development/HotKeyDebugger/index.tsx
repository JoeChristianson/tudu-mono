import { useEffect } from "react"
import { useAppSelector } from "../../../app/hooks"
import { RootState } from "../../../app/store"
import getAuthorization from "../../../utils/auth/getAuthorization"



const HotKeyDebugger = ()=>{

    const credentials = useAppSelector((state:RootState)=>state.auth.credentials)
    const {userId,jwt} = getAuthorization({credentials})
    

    const handleKeyDown = (event:KeyboardEvent)=>{
        const {key,ctrlKey,altKey} = event
        if(!ctrlKey||!altKey){
            return
        }
        event.preventDefault()
        if(key==="u"){
            console.log({userId,jwt})
        }
    }

    useEffect(()=>{
        document.addEventListener("keydown",handleKeyDown)
        return ()=>{
            document.removeEventListener("keydown",handleKeyDown)
        }
    },[])

    return<></>
}

export default HotKeyDebugger