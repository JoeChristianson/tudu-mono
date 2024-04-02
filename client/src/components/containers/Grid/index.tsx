import { ReactNode } from "react"
import styles from "./index.module.scss"

type Props = {
children:ReactNode
gap?:string
}

const Grid = ({children,gap}: Props) => {

    gap = gap || ".5em"

    const style = {
        gap
    }

return <div style={style} className={styles.div}>
    {children}
    </div>
}

export default Grid