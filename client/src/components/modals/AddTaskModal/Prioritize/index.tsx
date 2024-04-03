import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { RootState } from "../../../../app/store"
import { togglePrioritize } from "../../../../features/taskadd/taskaddSlice"
import highestPriority from "../../../../hooks/highestPriority"
import styles from "./index.module.scss"

const Prioritize = () => {

    const topPriority = highestPriority()
    const {priority} = useAppSelector((state:RootState)=>state.taskAdd.intendedTask)
    const dispatch = useAppDispatch()

    const handleClick = ()=>{
        dispatch(togglePrioritize({topPriority}))
    }

    return <div className={styles.div}>
        <button onClick={handleClick} className={priority?styles.on:styles.off}>Prioritize</button>
    </div>
}

export default Prioritize