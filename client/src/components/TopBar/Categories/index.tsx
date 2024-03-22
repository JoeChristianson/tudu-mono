import { useAppSelector } from "../../../app/hooks"
import { RootState } from "../../../app/store"
import CategoryButton from "./CategoryButton"
import styles from "./index.module.scss"

type Props = {

}

const Categories = ({}: Props) => {
    
    const categories = useAppSelector((state:RootState)=>state.auth.credentials?.user.categories)||[]
    return <div className={styles.div}>
        {categories.map((category,key)=>{
            return<CategoryButton
            category={category}
            key={key}
            ></CategoryButton>
        })}
    </div>
}

export default Categories