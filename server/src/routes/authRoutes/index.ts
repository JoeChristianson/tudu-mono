import express from "express";
import hashPassword from "../../util/auth/password/hashPassword";
import { UserModel } from "../../models/User";
import getCredentials from "./helpers/getCredentials";
import comparePasswords from "../../util/auth/password/comparePasswords";
import qualifyPassword from "./helpers/qualifyPassword";


const authRouter = express.Router()

authRouter.post("/register",async (req,res)=>{
    try{
        const {email,password,name} = req.body
        const passwordQualified = qualifyPassword(password)
        if(!passwordQualified.success){
            throw new Error(passwordQualified.message)
        }
        const hashedPassword = await hashPassword(password)
        const user = await UserModel.create({email,name,password:hashedPassword})
        const credentials = getCredentials({user})
        res.json({success:true,credentials})
    }catch(err:any){
        res.json({success:false,errorMessage:err.message})
    }
})

authRouter.post("/login",async (req,res)=>{
    try{
        const {email,password} = req.body
        const hashedPassword = await hashPassword(password)
        const user = await UserModel.findOne({email})
        if(!user){
            throw new Error("Wrong Email")
        }
        const correctPassword = comparePasswords({user,submittedPassword:password})
        if(!correctPassword){
            throw new Error("wrong password")
        }
        const credentials = getCredentials({user})
        res.json({success:true,credentials})
    }catch(err:any){
        res.json({success:false,errorMessage:err.message})
    }
})


export default authRouter