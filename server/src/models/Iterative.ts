import mongoose, { Schema } from "mongoose"
import DDate from "../util/DDate"


export interface IIterative extends Document {
    name:string
    lastComplete:Date
    nextDue:Date
    dayGap:number
    user:string
}

const IterativeSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    lastComplete:{
        type:Date,
        required:false
    },
    nextDue:{
        type:Date,
        required:true
    },
    dayGap:{
        type:Number,
        required:true,
        default:1
    },
    user:{
        type:Schema.ObjectId,
        ref:"User",
        required:false
    }
})

IterativeSchema.virtual('due').get(function () {
    if(!this.lastComplete){
        return true
    }
    const lastDate = DDate(this.lastComplete)
    const today = DDate()
    if(lastDate===today){
        return false
    }
    return true
  });

  IterativeSchema.set('toJSON', { virtuals: true });


const Iterative = mongoose.model<IIterative>('Iterative',IterativeSchema)

export default Iterative

