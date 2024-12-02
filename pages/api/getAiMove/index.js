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
  console.log(response);
  console.log("returning:", response);
  res.status(200).json({ thisTurn: response });
  return;
}

const handleMove = async (req, res) => {
  console.log("init handle move...");
  // console.log(req.body);
  const { grid, allowedMoves } = req.body;
  console.log("allowed");
  console.log(allowedMoves);
  const gridString = JSON.stringify(grid);
  const allowedMovesString = JSON.stringify(allowedMoves);
  console.log(gridString);
  try {
    const response = await openai.chat.completions.create({
      // model: "gpt-4o-mini",
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `
          You are the AI player in an online Connect Four game. You are playing against a human. You are an expert player.

          Here are the steps to take / rules to follow when providing a move back to the game application:
          
          1)You are playing Connect Four as the RED computer player.
          2)Game board works like this: ([0][0] is top left of the board, because first array is top row and first inner-array item is the left column.
          3) It is your turn, and here is the game board for you to base your turn on: ${gridString}
          4) Keep in mind when selecting a strategic move that the goal is to get four of your pieces in a row either horizontally, vertically, or diagonally, while simultaneously blocking the BLUE user from doing the same. Prioritize blocking BLUE user from winning.
          5) If you have three pieces in a row already, and have an adjascent spot available that would win the game, you should place the piece there.
          6) You also should attempt to block the BLUE user from completing four in a row if possible.
          7) If there is no immediate winning move, pick the space you estimate has the best chance of leading to a victory.
          8) You must return with a move.
          9) Specify the column that your game piece will be placed in. Your game piece will drop to the bottom-most available row in the column. Return the result in the json format like this: {"move": "4"}
          10) In the above example, 4 represents the column.
          11) RULE!: You are only allowed to choose a column number for your move IF IT IS INCLUDED in the following AllowedMoves array: ${allowedMovesString}. All other columns are invalid and will cause an error to be thrown. Do not return undefined. You must return a valid move.
          12) Before submitting a move, check to see if the BLUE user has two pieces in a row, especially horizontally. If they do, you should block them from getting three in a row if possible. This is a defensive strategy.
          13) most important takeaways: please return a move in the format {"move": "<column number>"}, and make sure the number matches a number in the AllowedMoves array.
          note: I notice that within the first few moves, the AI player tends to be vulnerable to losing. Please make sure to prioritize blocking the human player from winning, especially in the bottom row. e.g. board[5] inner array might be [null, null, null, "blue", "blue", null, null] you should block by making the array be [null, null, "red", "blue", "blue", null, null]. To do that, you would return {"move": "2"}. You don't have to do that exact move, but this is a type of beginning of game strategy to keep in mind. Good luck!`,
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
      thisMove = await handleMove(req, res);
      thisTurn = await JSON.parse(thisMove).move;
      // return thisTurn;
    } else {
      console.log(`valid, returning ${thisTurn}`);
      return thisTurn;
    }
  } catch (e) {
    console.log(e);
    const thisMove = await handleMove(req, res);
    console.log(`error caught, retried, returning ${thisMove}`);
    return thisMove;
  }
};

const validateMove = (gameBoard, move) => {
  // Check if the column has available space
  console.log({ move });
  console.log(gameBoard[0][move]);
  if (move == undefined) {
    console.log("error1");
    return false;
  }
  if (move == null) {
    console.log("error2");
    return false;
  }
  if (move < 0) {
    console.log("error3");
    return false;
  }
  if (move > gameBoard[0].length) {
    console.log("error4");
    return false;
  }
  if (gameBoard[0][move] == null || gameBoard[0][move] == undefined) {
    console.log("space in column, valid");
    return true; // Return the move if there's space in the column
  }
  // If no space is available in the column, return an error
  console.log("no space in column, invalid");
  return false;
};
