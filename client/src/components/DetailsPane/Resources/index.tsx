import LinkType from "../../../types/LinkType"
import styles from "./index.module.scss"

type Props = {
    resources:LinkType[]
}

const Resources = ({resources}: Props) => {
        
    return <div className={styles.div}>
        <h4>Resources:</h4>
        <ul>

        {resources&&resources.map((r,index)=>{
            const {url,title} = r
            return<li className={styles['link-cont']}>
                <a target="_blank" key={index} href={url}>{title}</a>
                </li>
        })}
        </ul>
    </div>
}

export default Resources