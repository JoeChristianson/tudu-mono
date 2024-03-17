import express from "express";
import Task from "../../models/Task";
import queryOpenAi from "../../util/queryOpenAi";



const resourcesRouter = express.Router()


resourcesRouter.post("/",async (req,res)=>{
    try{
        const {taskId} = req.body
        const task = await Task.findById(taskId)
        if(!task){
            throw new Error("Could not find test")
        }
        const query = `Give me resources (and by resources, I mean digital resources, i.e. urls that would help) and tips and tricks for this task: ${task.name}`
        const result = await queryOpenAi({query})
        const tips_and_tricks = result.tips_and_tricks
        const resources = result.resources
        task.tips_and_tricks = tips_and_tricks
        task.resources = resources
        await task.save()
        res.json({tips_and_tricks,resources})
    }catch(err){
        console.log(err)
        res.send("")
    }
})


export default resourcesRouter