import express from "express"
import Task from "../../models/Task"
import generateSubtasks from "../../util/subtaskGeneration/generateSubtasks"
import createSubtask from "./createSubtask"
import validateUser from "../../util/auth/validateUser"
import { UserModel } from "../../models/User"
import queryOpenAi from "../../util/queryOpenAi"
import createPopulateQuery from "../../util/queries/populateQuery"

const taskRouter = express.Router()

taskRouter.get("/:userId",async(req,res)=>{
    try{
        const userId = req.params.userId
        const tasks = await Task.find({isRoot:true,status:"incomplete",user:userId}).populate({
            path:"subTasks",populate:"subTasks"
        })
        // const tasks = await Task.find({isRoot:true,status:"incomplete",user:userId})

        res.status(200).json({tasks})
    }catch(err){
        console.log({err})
        res.send("")
    }
})

taskRouter.post("/",async (req,res)=>{
    try{
    
        const {name,jwt,userId} = req.body
        await validateUser({userId,jwt})
        const user = await UserModel.findById(userId)
        if(!user){
            throw new Error("Wrong Email")
        }
        const createdAt = new Date()
        const task = await Task.create({name,isRoot:true,status:"incomplete",createdAt,user:userId})
        console.log({task})
        res.send({id:task._id})
    }catch(err:any){
        res.json({success:false,errorMessage:err.message})
    }
})

taskRouter.post("/add",async (req,res)=>{
    try{
    
        const {task,jwt,userId} = req.body
        await validateUser({userId,jwt})
        const user = await UserModel.findById(userId)
        if(!user){
            throw new Error("Wrong Email")
        }
        const createdAt = new Date()
        const prioritized = task.prioritized
        console.log({prioritized})
        const taskDoc = await Task.create({...task,createdAt,user:userId,isRoot:true})
        console.log({task:taskDoc})
        res.send({task:taskDoc,success:true})
    }catch(err:any){
        console.log(err.message)
        res.json({success:false,errorMessage:err.message})
    }
})

taskRouter.put("/populate",async (req,res)=>{
    try{
        const {taskId,additionalNotes,userId} = req.body
        const task = await Task.findById(taskId)
        if(!task){
            throw new Error("No task with that id")
        }
        const query = createPopulateQuery({task,additionalNotes})
        const responseContent = await queryOpenAi({query})
        const {
            subtasks,tips,requiredToolsAndMaterials,estimatedCompletionTime,difficulty, pointValue,urgency,textAssets
        } = responseContent
        task.subTasks = [] as any
        for (let subtaskName of subtasks){
            const subtask  = await createSubtask({parentId:taskId,name:subtaskName,userId})
           task.subTasks.push(subtask)
           }
           task.tips_and_tricks = tips
           task.requiredItems = requiredToolsAndMaterials
           task.estimatedCompletionTime = estimatedCompletionTime
           task.difficulty = difficulty
           task.pointValue = pointValue
           task.urgency = urgency
           task.textAssets = textAssets
           task.save()
           res.status(200).json({success:true,task})
    }catch(err:any){
        res.status(500).json({success:false,errorMessage:err.message})
    }
})

taskRouter.put("/status",async (req,res)=>{
    try{

            console.log("changing status")
        const {taskId,status} = req.body
        if(status!=="complete"&&status!=="incomplete"){
            throw new Error("Invalid Status")
        }
        // const task = await Task.findByIdAndUpdate(taskId,{status},{new:true})
        const task = await Task.findById(taskId)
        if(!task){
            throw new Error("No Task with that id")
        }
        task.status = status
        if(status==="complete"){
            task.completedOn = new Date()
        }
        await task.save()
        res.send({success:true,task})
    }catch(err:any){
        console.log(err)
        res.send({success:false,errorMessage:err.message})
    }
})

taskRouter.put("/notes",async (req,res)=>{
    try{
        const {taskId,notes} = req.body
        console.log({taskId,notes})
                const task = await Task.findById(taskId)
        if(!task){
            throw new Error("No Task with that id")
        }
        task.notes = notes
        await task.save()
        res.send({success:true,task})
    }catch(err:any){
        console.log(err)
        res.send({success:false,errorMessage:err.message})
    }
})


taskRouter.post("/generate-subtasks",async (req,res)=>{
    try{
        const {id,userId,jwt} = req.body
        const task = await Task.findById(id)
        await validateUser({userId,jwt})
        if(!task){
            throw new Error("No matching id")
        }
        const subtaskNames = await generateSubtasks({task})
        const subtasks = []
        for (let subtaskName of subtaskNames){
             const subtask  = await createSubtask({parentId:id,name:subtaskName,userId})
            subtasks.push(subtask)
            }
        res.send({subtasks})
    }catch(err){
        console.log(err)
        res.send("")
    }
})

taskRouter.post("/subtask",async (req,res)=>{
    try{
        const {name,parentTaskId,jwt,userId} = req.body
        await validateUser({userId,jwt})
        const subtask = await Task.create({name,user:userId})
        const task = await Task.findById(parentTaskId)
        if(!task){
            throw new Error("No task matching that id")
        }
        task.subTasks.push(task)
        await task.save()
        res.send({id:subtask._id})
    }catch(err){
        console.log(err)
        res.send("")
    }
})

taskRouter.delete("/:id",async (req,res)=>{
    try{
        const taskId = req.params.id
        const {userId,jwt} = req.body
        validateUser({userId,jwt})
        await Task.findByIdAndDelete(taskId)
        res.json({success:true})
    }catch(err:any){
        res.json({error:true,message:err.message})
    }
})

taskRouter.put("/priority/:id",async (req,res)=>{
    try{
        const taskId = req.params.id
        const priority = req.body.priority
        await Task.findByIdAndUpdate(taskId,{priority})
        res.json({success:true})
    }catch(err:any){
        res.json({error:true,message:err.message})
    }
})

taskRouter.post("/category",async (req,res)=>{
    try{
        const {taskId,category,userId} = req.body
        const user = await UserModel.findById(userId)
        if(!user){
            throw new Error("No user with that id.")
        }
        const categories = user.categories
        if(!categories.includes(category)){
            user.categories = [...user.categories,category]
            await user.save()
        }
        console.log({user})
        const task = await Task.findById(taskId)
        if(!task){
            throw new Error("No task with that id.")

        }
        const taskCategories = task.categories||[]
        if(!taskCategories.includes(category)){
            task.categories = [...taskCategories,category]
            await task.save()
        }
        res.json({success:true})
    }catch(err:any){
        res.json({error:true,message:err.message})
    }
})

export default taskRouter
