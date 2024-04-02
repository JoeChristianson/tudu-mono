import styles from "./index.module.scss"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  autoFocus?:boolean
}

const Input = (props:InputProps) => {
    const {autoFocus} = props  
  
  return<input autoFocus={autoFocus} className={styles.input} {...props}></input>
}

export default Input   