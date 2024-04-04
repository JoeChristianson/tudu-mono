import { ReactNode } from "react"
import styles from "./index.module.scss"

type Props = {
children:ReactNode
}

const ModalWrapper = ({children}: Props) => {
    return  <div className={styles.div}>
        {children}
    </div>
}

export default ModalWrapper