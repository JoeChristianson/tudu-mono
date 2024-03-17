import jwt from 'jsonwebtoken';
import { DynamicAnyObject } from '../../types/auth/objects';

const generateJWT = ({payload}:{payload:DynamicAnyObject})=>{
    const secret = process.env.JWT_SECRET
    if(!secret){
        throw new Error("Backend Issue")
    }
    const token = jwt.sign(payload,secret,{
        expiresIn:"24h"
    })
    return token
}

export default generateJWT