import Iterative from "../../../types/Iterative"

interface Args {
    _id:string
    iteratives:Iterative[]
}

const setIterativeAsComplete = ({_id,iteratives}:Args)=>{
    iteratives = [...iteratives]
    for (let iterative of iteratives){
        if (iterative._id===_id){
            iterative.status = "complete"
            return iteratives
        }
    }
    return iteratives
}

export default setIterativeAsComplete