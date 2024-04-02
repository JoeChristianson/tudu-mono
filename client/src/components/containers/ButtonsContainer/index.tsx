import { ReactNode } from "react"
import styles from "./index.module.scss"

type Props = {
children:ReactNode
}

const ButtonsContainer = ({children}: Props) => {
    return <div className={styles.div}>
    {children}
    </div>
}

export default ButtonsContainer