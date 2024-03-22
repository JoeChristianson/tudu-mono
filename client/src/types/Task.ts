import LinkType from "./LinkType"

type Task = {
    _id:string
    name:string
    status:"complete"|"incomplete"
    resources:LinkType[]
    tips_and_tricks?:string[]
    subTasks?:Task[]
    notes?:string
    priority?:number
    categories?:string[]
}

export type IntendedTask = {

    name:string
    status:"complete"|"incomplete"
    resources:LinkType[]
    tips_and_tricks?:string[]
    subTasks?:Task[]
    notes?:string
    priority?:number
    categories?:string[]
}
    
    
export default Task