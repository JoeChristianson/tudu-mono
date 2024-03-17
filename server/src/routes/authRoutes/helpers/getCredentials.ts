import { IUser } from "../../../models/User"
import generateJWT from "../../../util/auth/generateJWT"

interface Args {
    user:IUser
}

const getCredentials = ({user}:Args)=>{
    const payload = {
        email:user.email,
        name:user.name,
        userId:user._id
    }
    const jwt = generateJWT({payload})
    return {
        user,
        jwt
    }
}

export default getCredentials