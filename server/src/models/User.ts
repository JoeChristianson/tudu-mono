import { Schema, model } from 'mongoose';
import { IIterative } from './Iterative';

export interface IUser extends Document {
  _id:string
  name: string;
    password:string
    email:string
    categories:string[]
    iteratives?:IIterative[]
  }


export const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name:{type:String},
  categories:[{
    type:String
  }],
  iteratives:[{
    type:Schema.ObjectId,
    ref:"Iterative",
    required:false
  }]
});

export const UserModel = model<IUser>('User', UserSchema);
