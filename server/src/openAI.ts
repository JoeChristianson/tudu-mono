import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY

const openAITest = async ({task}:{task:string})=>{
const openai = new OpenAI({apiKey});

    const query = `I have to do the following task: ${task}. I need you to break down the task of ${task} into subtasks and put those subtasks into an array`

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
  const responseContent = completion.choices[0].message.content
  return responseContent
}

export default openAITest