import mongoose from "mongoose"

const connectMongoose = async ()=>{
    try {
        const mongo_db_uri = process.env.MONGO_DB_URI||'mongodb://localhost:27017/backend'
        await mongoose.connect(mongo_db_uri);
        console.log('MongoDB connected...',mongo_db_uri);
      } catch (error) {
        console.error('MongoDB connection error:', error);
      }
}

export default connectMongoose