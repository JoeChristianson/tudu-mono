import { fexPut } from "../utils/api/fex"

interface Args {
    iterativeId:string
    userId:string
    jwt:string
}

export const completeIterativeAPI = async ({iterativeId,userId,jwt}:Args)=>{
    try{
        const res = await fexPut("/iteratives/complete",{iterativeId,userId,jwt})
        return res
    }catch(err){
        console.log(err)
    }
}