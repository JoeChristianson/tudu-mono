import { ReactNode } from "react"
import styles from "./index.module.scss"

type Props = {
    children:ReactNode
}

const Label = ({children}: Props) => {
    return <label className={styles.label}>
        {children}
    </label>
}

export default Label    