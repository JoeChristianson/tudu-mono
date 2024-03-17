import { Schema, model } from 'mongoose';

export interface IUser extends Document {
  _id:string
  name: string;
    password:string
    email:string
    }


export const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name:{type:String}
});

export const UserModel = model<IUser>('User', UserSchema);
