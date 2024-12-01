import OpenAI, { Configuration, OpenAIApi } from "openai";

const openAiKey = process.env.REACT_APP_OPENAI_API_KEY;
const configuration = new OpenAI({
  apiKey: openAiKey,
  project: "proj_eJikDeOcWNVZG0LlLVVJN6Xa",
  dangerouslyAllowBrowser: "true",
});

const openai = new OpenAI(configuration);

export default async function handler(req, res) {
  let response = await handleMove(req, res);
  console.log("returning:", response);
  res.status(200).json({ thisTurn: response });
  return;
}

const handleMove = async (req, res) => {
  console.log("init handle move...");
  // console.log(req.body);
  const { grid, allowedMoves } = req.body;
  const gridString = JSON.stringify(grid);
  const allowedMovesString = JSON.stringify(allowedMoves);
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are playing Connect Four as the RED computer player. The current grid is: ${gridString}. It is your turn. You are an expert player! If you have three pieces in a row already, you MUST select the winning space if it is available. You also MUST attempt to block the BLUE user from completing four in a row if possible. If there is no immediate winning move, pick the space you estimate has the best chance of leading to a victory. The gid contains a secondary grid of rows. The first item of this grid [0][0] (a0) is the top left. The second [0][1] (a1) is the top left and one to the right. That is your context. You must return with a move. Specify the column that your game piece will be placed in. Return the result in the json format {"move": "4"}. 4 in this case represents the column. IMPORTANT: If there is a value other than null in the first row of a column, you cannot make "move" that column. Another way of putting this is that if grid[0][x] !== null, the response of {"move": "3"} is not acceptable. The reason is that if adding another piece to the 3 column, that would be a space beyond the game board that does not exist. Lastly, your allowed move choices are the following. This rule must be followed: ${allowedMovesString}`,
        },
      ],
      response_format: { type: "json_object" },
      max_tokens: 10,
    });

    let thisMove = response.choices[0].message.content;
    let thisTurn = JSON.parse(thisMove).move;
    // try {
    const validMove = validateMove(grid, thisTurn);
    if (!validMove) {
      console.log(`invalid, retrying...`);
      newMove = await handleMove(req, res);
      newTurn = JSON.parse(thisMove).move;
      return newTurn;
    } else {
      console.log(`valid, returning ${thisTurn}`);
      return thisTurn;
    }
  } catch (e) {
    const thisMove = await handleMove(req, res);
    console.log(`error caught, retried, returning ${thisMove}`);
    return thisMove;
  }
};

const validateMove = (gameBoard, move) => {
  // Check if the column has available space
  console.log({ move });
  console.log(gameBoard[0][move]);
  if (
    move == undefined ||
    move == null ||
    move < 0 ||
    move > gameBoard[0].length
  )
    return false;
  if (gameBoard[0][move] == null || gameBoard[0][move] == undefined) {
    return true; // Return the move if there's space in the column
  }
  // If no space is available in the column, return an error
  return false;
};
