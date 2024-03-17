import styles from "./index.module.scss"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    // Additional props specific to your input component can be defined here
  }

const Input = (props:InputProps) => {
    return<input className={styles.input} {...props}></input>
}

export default Input   