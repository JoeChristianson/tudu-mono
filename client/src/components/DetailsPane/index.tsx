import { useAppSelector } from "../../app/hooks"
import getTask from "../../utils/getTask"
import ModuleCont from "../ModuleCont"
import Subtasks from "../Subtasks"
import TaskCategoriesModule from "../modules/TaskCategoriesModules"
import Resources from "./Resources"
import TipsAndTricks from "./TipsAndTricks"
import styles from "./index.module.scss"

type Props = {
}

const DetailsPane = ({}: Props) => {

    const {tasks,detailedTaskId} = useAppSelector(state=>state.tasks)

    if(!detailedTaskId||!tasks){
        return<ModuleCont><h3 style={{textAlign:"center"}}>Click on Task to Open Details</h3></ModuleCont>
    }

    const task = getTask({tasks,detailedTaskId})


    if(!task){
        return<ModuleCont><h3>Click on Task to Open Details</h3></ModuleCont>
    }

    const {name,resources,tips_and_tricks} = task


    return<div>
        <TaskCategoriesModule></TaskCategoriesModule>
     <ModuleCont>

            <h3 style={{textAlign:"center"}}>{name}</h3>
            <Subtasks task={task}></Subtasks>
            <TipsAndTricks tips={tips_and_tricks}></TipsAndTricks>
            <Resources resources={resources}></Resources>
    </ModuleCont>
    </div>
}

export default DetailsPane  