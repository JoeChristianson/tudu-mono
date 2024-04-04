import express from "express"
import validateUser from "../../util/auth/validateUser"
import Iterative from "../../models/Iterative"
import { UserModel } from "../../models/User"
import compareUserIds from "../../util/auth/compareUserIds"
const iterativesRouter = express.Router()

iterativesRouter.get("/:userId",async(req,res)=>{
    try{
        const userId = req.params.userId
        const user = await UserModel.findById(userId).populate({ path: 'iteratives', options: { virtuals: true } })
        if(!user){
            throw new Error("No user with that id")
        }
        const {iteratives} = user
        res.status(200).json({success:true,iteratives})
    }catch(err:any){
        res.status(500).json({success:false,errorMessage:err.message})
    }
})

iterativesRouter.post("/:userId",async (req,res)=>{
    try{
        const userId = req.params.userId
        const {name,repetition,jwt} = req.body

        await validateUser({userId,jwt})
        const nextDue = new Date()
        const dayGap = 1
        const iterative = await Iterative.create({name,nextDue,dayGap,user:userId})
        const user = await UserModel.findById(userId)
        if(!user){
            throw new Error("No user with that id")
        }
        if(!user.iteratives){
            user.iteratives = [iterative]
        }
        else{
            user.iteratives.push(iterative)
        }
        await user.save()
        res.status(200).json({success:true,iterative})
    }catch(err:any){
        res.status(200).json({success:false,errorMessage:err.message})
    }
})

iterativesRouter.put("/complete",async (req,res)=>{
    try{
        const {userId,jwt,iterativeId} = req.body
        await validateUser({userId,jwt})
        const iterative = await Iterative.findById(iterativeId)
        if(!iterative){
            throw new Error("No iterative with that id.")
        }
        const iterativeUserId = iterative.user
        const matchingUserIds = compareUserIds(userId,iterativeUserId)
        if(!matchingUserIds){
            throw new Error("wrong user id")
        }
        iterative.lastComplete = new Date()
        await iterative.save()
        res.status(200).json({sucess:true})
    }catch(err:any){
        res.status(500).json({success:true,errorMessage:err.message})
    }
})

iterativesRouter.delete("/:iterativeId",async (req,res)=>{
    try{
        const {iterativeId} = req.params
        const {userId,jwt} = req.body
        await validateUser({userId,jwt})
        await Iterative.findByIdAndDelete(iterativeId)
        res.status(200).json({success:true})
    }catch(err:any){
        res.status(500).json({success:false,errorMessage:err.message})
    }
})

export default iterativesRouter