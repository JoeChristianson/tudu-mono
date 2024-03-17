import { ReactNode } from "react"
import styles from "./index.module.scss"

type Props = {
    children:ReactNode
}

const Main = ({children}: Props) => {
    return <main className={styles.main}>
        {children}
    </main>
}

export default Main 