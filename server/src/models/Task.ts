import mongoose, { Schema, Document, Types } from 'mongoose';
import { IUser } from './User';

type Status = "complete"|"incomplete"

const ResourceSchema = new Schema({
  title:String,
  url:String
})

export interface ITask extends Document {

  name: string;
  status: Status
    subTasks:Types.Array<ITask>
    user:IUser
    isRoot:boolean
    parentTask:ITask
    tips_and_tricks:string[]
    resources:{title:string,url:string}
    createdAt:Date
    completedOn:Date
    notes?:string
    priority?:number
    categories?:string[]
  }

const TaskSchema: Schema = new Schema({
  user:{
    type:Schema.Types.ObjectId,ref:"User",required:true
  },
  name: { type: String, required: true },
    subTasks:[{
        type:Schema.Types.ObjectId, ref:"Task"
    }],
    isRoot:{
      type:Boolean,default:false
    },
    parentTask:{
      type:Schema.Types.ObjectId,ref:"Task",required:false
    },
    resources:[{
      type:ResourceSchema,default:""
    }],
    tips_and_tricks:[{
      type:String
    }],
    status:{
      type:String,
      default:"incomplete"
    },
    createdAt:{
      type:Date,
      default:Date.now()
    },
    completedOn:{
      type:Date,
      required:false
    },
    notes:{
      type:String,
      required:false,
      default:""
    },
    priority:{
      type:Number,
      required:false,
      default:0
    },
    categories:[{
      type:String
    }]
});

const Task = mongoose.model<ITask>('Task', TaskSchema);

export default Task;