import { IUser } from "../../models/User"

type Credentials = {
    user:IUser
    jwt:string
}

export default Credentials