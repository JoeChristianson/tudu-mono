import { useAppDispatch } from "../app/hooks"
import { togglePrioritize } from "../features/taskadd/taskaddSlice"
import highestPriority from "./highestPriority"

const useHotKey = ()=>{
    const topPriority = highestPriority()

    const dispatch = useAppDispatch()

    const p = ()=>{
        dispatch(togglePrioritize({topPriority}))
    }


    const handleHotKey = (event:any)=>{
        if(!event.ctrlKey){
            return
        }
        event.preventDefault()
        const key = event.key
        if(key==="p"){
            p()
        }
    }

    return handleHotKey

}

export default useHotKey