import OpenAI, { Configuration, OpenAIApi } from "openai";

const openAiKey = process.env.REACT_APP_OPENAI_API_KEY;
console.log("open ai key");
console.log(openAiKey);
const configuration = new OpenAI({
  apiKey: openAiKey,
  project: "proj_eJikDeOcWNVZG0LlLVVJN6Xa",
  dangerouslyAllowBrowser: "true",
});

const openai = new OpenAI(configuration);

export default async function handler(req, res) {
  const { grid } = req.body;

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: `You are playing Connect Four. The current grid is: ${JSON.stringify(
          grid
        )}. You are playing as the computer player and it is your turn. The gid contains a secondary grid of rows. The first item of this grid [0][0] (a0) is the top left. The second [0][1] (a1) is the top left and one to the right. That is your context. You must return with a move. Specify the column that your game piece will be placed in. Return the result in the json format {"move": "4"}. 4 in this case represents the column.`,
      },
    ],
    response_format: { type: "json_object" },
    max_tokens: 10,
  });

  const thisMove = response.choices[0].message.content;
  const thisTurn = JSON.parse(thisMove).move;
  res.status(200).json({ thisTurn });
}
