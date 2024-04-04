import Task from "../../../types/Task"

interface Args {
    categories:string[]
    tasks:Task[]
}

const filterByCategories = ({categories,tasks}:Args)=>{
    if(categories.length===0){
        return tasks
    }
    const filteredTasks = tasks.filter((task:Task)=>{
        const taskCategories = task?.categories||[]
        for (let category of categories){
            for (let taskCategory of taskCategories){
                if(category===taskCategory){
                    return true
                }
            }
        }
        return false
    })
    return filteredTasks

}

export default filterByCategories