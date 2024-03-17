import OpenAI from "openai";



const apiKey = process.env.OPENAI_API_KEY

const queryOpenAi = async ({query}:{query:string})=>{
    
    const openai = new OpenAI({apiKey});

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
  return responseContent
}

export default queryOpenAi