import AddTaskRow from "../AddTaskRow"
import CurrentTasks from "../CurrentTasks"
import ModuleCont from "../ModuleCont"

type Props = {
}

const TasksList = ({}: Props) => {
        
    return <ModuleCont>
        <AddTaskRow></AddTaskRow>
        <CurrentTasks></CurrentTasks>
    </ModuleCont>
}

export default TasksList    