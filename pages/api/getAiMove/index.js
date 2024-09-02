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
  console.log(grid);
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: `You are playing Connect Four as the RED computer player. The current grid is: ${JSON.stringify(
          grid
        )}. It is your turn. You are an expert player! If you have three pieces in a row already, you MUST select the winning space if it is available. You also MUST attempt to block the BLUE user from completing four in a row if possible. If there is no immediate winning move, pick the space you estimate has the best chance of leading to a victory. The gid contains a secondary grid of rows. The first item of this grid [0][0] (a0) is the top left. The second [0][1] (a1) is the top left and one to the right. That is your context. You must return with a move. Specify the column that your game piece will be placed in. Return the result in the json format {"move": "4"}. 4 in this case represents the column. IMPORTANT: If there is a value other than null in the top row of a column, you cannot make "move" that column. Another way of putting this is that if grid[0][3] !== null, the response of {"move": "3"} is not acceptable. The reason is that if adding another piece to the 3 column, that would be a space beyond the game board that does not exist.`,
      },
    ],
    response_format: { type: "json_object" },
    max_tokens: 10,
  });

  const thisMove = response.choices[0].message.content;
  const thisTurn = JSON.parse(thisMove).move;
  console.log(thisTurn);
  res.status(200).json({ thisTurn });
}
