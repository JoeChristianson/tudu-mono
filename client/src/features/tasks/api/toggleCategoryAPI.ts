import { fexPut } from "../../../utils/api/fex"

interface Args {
    taskId:string
    category:string
}

const toggleCategoryAPI = async ({taskId,category}:Args)=>{
    const res = await fexPut("/category/task",{taskId,category})
    return res
}

export default toggleCategoryAPI