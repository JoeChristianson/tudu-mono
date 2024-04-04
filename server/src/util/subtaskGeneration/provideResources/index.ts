import OpenAI from "openai";
import { ITask } from "../../../models/Task"

interface Args {
    task:ITask
}

const provideResources = async ({task}:Args)=>{
    const apiKey = process.env.OPENAI_API_KEY

    const openai = new OpenAI({apiKey});
    const query = `provide resources for this task ${task.name}`
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
      const resources = responseContent.resources
      return resources
}

export default provideResources