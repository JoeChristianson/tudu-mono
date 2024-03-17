import { useAppDispatch } from "../../../app/hooks"
import generateSubtasks from "../../../features/tasks/api/generateSubtasks"
import Button from "../../Button"

type Props = {
    taskId:string
}

const AddSubTasksButton = ({taskId}: Props) => {
    
    const dispatch = useAppDispatch()

    const handleClick = ()=>{
        dispatch(generateSubtasks({taskId}))
    }

    return <Button onClick={handleClick}>
        Generate Subtasks
    </Button>
}

export default AddSubTasksButton