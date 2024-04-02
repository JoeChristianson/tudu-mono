
import express from "express"
import queryOpenAi from "../../util/queryOpenAi"

const generalRouter = express.Router()


generalRouter.post("/", async (req,res)=>{
    try{
        const {query} = req.body
        const responseContent = await queryOpenAi({query})
        res.status(200).json({responseContent})
    }catch(err){
        res.status(500).json({success:false})
    }
})

export default generalRouter