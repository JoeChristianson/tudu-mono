import Categories from "./Categories"
import styles from "./index.module.scss"

type Props = {

}

const TopBar = ({}: Props) => {
    return <header className={styles.header}>
    <Categories></Categories>
    </header>
}

export default TopBar