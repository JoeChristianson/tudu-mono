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
    }
});

const Task = mongoose.model<ITask>('Task', TaskSchema);

export default Task;