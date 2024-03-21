import { useAppSelector } from "../../app/hooks"
import styles from "./index.module.scss"

type Props = {

}

const ModalResolver = ({}: Props) => {
    
    const currentModal = useAppSelector(a=>a.modal.currentModal)
    
    if(!currentModal){
        return<></>
    }

    return<>
        <div className={styles['modal-underlay']}></div>
     <div className={styles.modal}>
        {currentModal}
    </div>
    </>
}

export default ModalResolver