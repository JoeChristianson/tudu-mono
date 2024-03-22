import { ReactNode } from "react"
import styles from "./index.module.scss"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children:ReactNode
    selected?:boolean
    tooltip?:string
}

const Button = (props: Props) => {
    const {children,selected} = props
    const tooltip = props.tooltip
    return (
        <button {...props} className={`${styles.button} ${props.className} ${selected?styles.selected:""}`}>
        {tooltip&&<div>ToolTip Here</div>}
        {children}
    </button>
     )
}

export default Button