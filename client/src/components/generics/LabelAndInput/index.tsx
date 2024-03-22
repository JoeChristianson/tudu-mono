import { ReactNode } from "react"
import styles from "./index.module.scss"

type Props = {
children:ReactNode
}

const LabelAndInput = ({children}: Props) => {
    return <div className={styles.cont}>
    {children}
    </div>
}

export default LabelAndInput