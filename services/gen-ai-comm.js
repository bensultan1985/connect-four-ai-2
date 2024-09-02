import { Axios } from "axios";
import OpenAI from "openai";

const axios = new Axios();
const openAiKey = process.env.REACT_APP_OPENAI_API_KEY;
async function getGenAiCommAxios() {
  try {
    const response = await axios.get("/user?ID=12345");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

const openai = new OpenAI({
  apiKey: openAiKey,
  project: "proj_eJikDeOcWNVZG0LlLVVJN6Xa",
  dangerouslyAllowBrowser: "true",
});

export const genAiComm = async (prompt) => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: prompt }],
    model: "gpt-4o",
  });
  return completion.choices[0].message.content;
};
