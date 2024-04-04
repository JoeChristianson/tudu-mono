import Credentials from "../../types/Credentials"

interface Args {
    credentials:Credentials|null
}

const getAuthorization = ({credentials}:Args)=>{
    if(!credentials){
        return {userId:null,jwt:null}
    }
    const userId = credentials.user._id
    const jwt = credentials.jwt
    return {userId,jwt}
}

export default getAuthorization