import { ReactNode, useEffect } from "react"
import styles from "./index.module.scss"
import { useAppDispatch } from "../../app/hooks"
import { closeModal, openModal } from "../../features/modal/modalSlice"
import AddTaskModal from "../modals/AddTaskModal"
import AddIterativeModal from "../modals/AddIterativeModal"

type Props = {
    children:ReactNode
}

const Main = ({children}: Props) => {

    const dispatch = useAppDispatch()
    
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const key = event.key
            if(key==="Escape"){
                dispatch(closeModal())
            }2
            if(!event.ctrlKey){
                return
            }
            event.preventDefault(); // Prevent the default action
            if (key === 'a') {
                dispatch(openModal(<AddTaskModal></AddTaskModal>))
            }
            if(key==="d"){
                dispatch(openModal(<AddIterativeModal></AddIterativeModal>))
            }
        };

        // Add event listener
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    
    return <main className={styles.main}>
        {children}
    </main>
}

export default Main 