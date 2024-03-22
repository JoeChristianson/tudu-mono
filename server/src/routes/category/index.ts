import express from "express"
import validateUser from "../../util/auth/validateUser"
import { UserModel } from "../../models/User"
import Task from "../../models/Task"



const categoryRouter = express.Router()

categoryRouter.post("/",async (req,res)=>{
    try{
        const {userId,jwt,category} = req.body
        console.log({userId,jwt,category})
        await validateUser({userId,jwt})
        const user = await UserModel.findById(userId)
        if(!user){
            throw Error("no user")
        }
        if(user.categories.includes(category)){
            throw new Error("category exists already")
        }
        user?.categories.push(category)
        await user?.save()
        console.log({user})
        res.status(200).json({success:true})
    }catch(err:any){
        console.log(err.message)
        res.status(400).json({success:false,errorMessage:err.message})
    }
})

categoryRouter.put("/task",async (req,res)=>{
    try{
        const {taskId,category} = req.body
        console.log("putting",{taskId,category})
        const task = await Task.findById(taskId)
        if(!task){
            throw new Error("No task with that id")
        }
        let taskCategories = [...(task.categories||[])]
        if(taskCategories.includes(category)){
            taskCategories = taskCategories.filter(c=>c!==category)
        }else{
            taskCategories.push(category)
        }
        task.categories = taskCategories
        await task.save()
        res.status(200).json({success:true})
    }catch(err:any){
        console.log(err.message)
        res.status(500).json({success:false,errorMessage:err.message})
    }
})

export default categoryRouter