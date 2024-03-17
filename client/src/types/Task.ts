import LinkType from "./LinkType"

type Task = {
    _id:string
    name:string
    status:"complete"|"incomplete"
    resources:LinkType[]
    tips_and_tricks?:string[]
    subTasks?:Task[]
}

export default Task