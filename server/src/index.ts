import cors from "cors"
import express from "express"
import * as dotenv from "dotenv"
import openAITest from "./openAI";
import router from "./routes";
import connectMongoose from "./util/connectMongooose";
const app = express();
const port = 3000;
app.use(cors());

dotenv.config()
connectMongoose()
app.use(express.json())
app.use("/api",router)
app.post('/', async (req, res) => {
    try{
        const task = req.body?.task||""

        const subtasks = await openAITest({task})
        res.json({subtasks})
    }catch (error:any) {
    console.error('Error:', error?.message||"");
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
