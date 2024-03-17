import bcrypt from "bcrypt"
import { IUser } from "../../../models/User"

type Args = {
    submittedPassword:string
    user:IUser
}

const comparePasswords = ({submittedPassword,user}:Args)=>{
    const hashedPassword = user.password
    
    const res = bcrypt.compare(submittedPassword,hashedPassword)
    return res
}

export default comparePasswords