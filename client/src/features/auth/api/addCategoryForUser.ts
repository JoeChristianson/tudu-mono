import { fexPost } from "../../../utils/api/fex"


interface Args {
    userId:string
    jwt:string
    category:string
}

const addCategoryForUser = async ({userId,jwt,category}:Args)=>{
    const res = await fexPost("/category",{userId,jwt,category})
}

export default addCategoryForUser