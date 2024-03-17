import { ReactNode } from "react"
import styles from "./index.module.scss"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children:ReactNode
    tooltip?:string
}

const Button = (props: Props) => {
    const {children} = props
    const tooltip = props.tooltip
    return (
        <button {...props} className={`${styles.button} ${props.className}`}>
        {tooltip&&<div>ToolTip Here</div>}
        {children}
    </button>
     )
}

export default Button