import { ReactNode } from "react"
import styles from "./index.module.scss"

type Props = {
    children:ReactNode
}

const InputField = ({children}: Props) => {
    return <div className={styles['input-field']}>
        {children}
    </div>
}

export default InputField