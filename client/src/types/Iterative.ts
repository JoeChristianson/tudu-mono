type Iterative = {
    _id:string
    status?:'complete'|'incomplete'
    due:boolean
    name:string
    nextDue:Date
    dayGap:number   
}

export type IntendedIterative = {
    name:string
    due:true,
    nextDue:string
    dayGap:number
}

export default Iterative