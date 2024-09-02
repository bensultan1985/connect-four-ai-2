import OpenAI, { Configuration, OpenAIApi } from "openai";

const openAiKey = process.env.REACT_APP_OPENAI_API_KEY;
const configuration = new OpenAI({
  apiKey: openAiKey,
  project: "proj_eJikDeOcWNVZG0LlLVVJN6Xa",
  dangerouslyAllowBrowser: "true",
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const { grid } = req.body;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `You are playing Connect Four. The current grid is: ${JSON.stringify(
      grid
    )}. Where should you place your piece? Return the result in the format 'c4'.`,
    max_tokens: 10,
  });

  const thisTurn = response.data.choices[0].text.trim();
  res.status(200).json({ thisTurn });
}
