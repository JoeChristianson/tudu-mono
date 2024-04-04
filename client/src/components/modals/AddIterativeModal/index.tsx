import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { RootState } from "../../../app/store"
import { resetIntendedIterative } from "../../../features/iterativeAdd/iterativeAddSlice"
import addIterative from "../../../features/iteratives/helpers/addIterative"
import { closeModal } from "../../../features/modal/modalSlice"
import getAuthorization from "../../../utils/auth/getAuthorization"
import Button from "../../Button"
import IterativeName from "./IterativeName"
 
type Props = {

}

const AddIterativeModal = ({}: Props) => {
    const dispatch = useAppDispatch()
    const intendedIterative = useAppSelector((state:RootState)=>state.iterativeAdd.intendedIterative)
    const credentials = useAppSelector((state:RootState)=>{
        return state.auth.credentials
    })
    const {userId,jwt} = getAuthorization({credentials})
    const iterativeName = intendedIterative.name
    const handleSubmit = async ()=>{
        console.log({userId,jwt})
        if(!userId||!jwt){
            return
        }
        await dispatch(addIterative({userId,jwt,name:iterativeName,repetition:"daily"}))
        dispatch(resetIntendedIterative())
        dispatch(closeModal())
    }
    
    return <>
        <IterativeName></IterativeName>
        <Button onClick={handleSubmit}>Submit</Button>
    </>
}

export default AddIterativeModal