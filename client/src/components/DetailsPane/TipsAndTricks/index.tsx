import styles from "./index.module.scss"

type Props = {
    tips?:string[]
}

const TipsAndTricks = ({tips}: Props) => {
    
    if(!tips){
        return<></>
    }
    return <div>
        <h4>Tips and Tricks</h4>
        <ul>
        {tips.map((t:string,key:number)=>{
            return<li key={key}>{t}</li>
        })}
        </ul>
    </div>
}

export default TipsAndTricks