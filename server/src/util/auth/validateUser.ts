import decodeJWT from "./decodeJWT"

type Args = {
    userId:string
    jwt:string
}

const validateUser = ({userId,jwt}: Args) => {
    
    const decodedJWT:any = decodeJWT({token:jwt})
    console.log({decodedJWT})
    const tokenuserId = decodedJWT?.userId 
    
    if(!tokenuserId){
        throw new Error("Bad Token")
    }

    const validated = tokenuserId === userId
    if(!validated){
        throw new Error("not valid token")
    }

    return validated
}

export default validateUser