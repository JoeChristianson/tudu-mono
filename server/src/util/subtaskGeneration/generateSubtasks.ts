import OpenAI from "openai";
import { ITask } from "../../models/Task";
import generateSubtasksForSubtask from "./deepSubtaskQuery";
import shallowSubtaskQuery from "./shallowSubtaskQuery";
import deepSubtaskQuery from "./deepSubtaskQuery";

const apiKey = process.env.OPENAI_API_KEY

const generateSubtasks = async ({task}:{task:ITask})=>{

    const {isRoot,name} = task
    const taskName = name
    const openai = new OpenAI({apiKey});

    const query:string = isRoot?(shallowSubtaskQuery(taskName)):(await deepSubtaskQuery({task}))

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant designed to output JSON.",
      },
      { role: "user", content: query },
    ],
    model: "gpt-3.5-turbo-0125",
    response_format: { type: "json_object" },
  });
  const content = completion.choices[0].message.content
  if(!content){
    throw new Error("failed")
  }
  const responseContent = JSON.parse(content)
  const subtasks = responseContent.subtasks
  return subtasks
}

export default generateSubtasks