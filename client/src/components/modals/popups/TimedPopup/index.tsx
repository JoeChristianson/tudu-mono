
import "./index.module.scss"
import React, { useEffect, useState } from "react"
// import Modal from "../../modals/Modal"

const TimedPopup = ({message,trigger}:{message:string,trigger:boolean})=>{
    const [isOn,setIsOn] = useState(false)

    useEffect(()=>{
        if(trigger){
            setIsOn(true)
            setTimeout(()=>{
                setIsOn(false)
            },3000)
        }
    },[trigger])


    return<div>Not implemented yet</div>

    // return(
    //     <>
    //     {isOn?<Modal additionalClass="temp-popup">
    //         <div>
    //         {message}
    //         </div>
    //     </Modal>:<></>}
    //     </>
    // )
}
export default TimedPopup


