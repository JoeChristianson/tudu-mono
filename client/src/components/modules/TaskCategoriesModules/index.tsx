import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { toggleCategory } from "../../../features/tasks/tasksSlice"
import getTask from "../../../utils/getTask"
import Button from "../../Button"
import ModuleCont from "../../ModuleCont"
import AddCategory from "../../modals/AddTaskModal/ManageCategories/AddCategory"
import styles from "./index.module.scss"

type Props = {

}

const TaskCategoriesModule = ({}: Props) => {
    const {tasks,detailedTaskId} = useAppSelector(state=>state.tasks)
    const allCategories = useAppSelector(state=>state.auth.credentials?.user.categories)
    const dispatch = useAppDispatch()
    if(!detailedTaskId){
        return<></>
    }

    const task = getTask({tasks,detailedTaskId})
    console.log({task})
    const taskCategories = task?.categories
    
    interface Args {
        category:string
        selected:boolean
    }

    const handleClick = ({category,selected}:Args)=>{
        dispatch(toggleCategory({category,selected,taskId:detailedTaskId}))
    }

    return<ModuleCont key={detailedTaskId}>
        <div className={styles.cont}>

        {allCategories?.map((category,index)=>{
            const selected = taskCategories?.includes(category)
            return<Button onClick={()=>handleClick({category,selected:selected||false})} selected={selected} key={index}>{category}</Button>
        })}
        <AddCategory></AddCategory>
        </div>
    </ModuleCont>
}

export default TaskCategoriesModule