import React, { useState, useEffect } from "react";
// import "./connect-four-styles.scss";

export const ConnectFour = () => {
  const rows = 6;
  const columns = 7;
  const [grid, setGrid] = useState(Array(rows).fill(Array(columns).fill(null)));
  const [player, setPlayer] = useState("user"); // 'user' or 'ai'
  const [winner, setWinner] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  const handleClick = async (col) => {
    if (winner || !gameStarted) return; // Prevent clicks if game is over or game hasn't started

    const newGrid = grid.map((row) => row.slice());
    for (let row = rows - 1; row >= 0; row--) {
      if (!newGrid[row][col]) {
        newGrid[row][col] = player === "user" ? "blue" : "red";
        break;
      }
    }
    setGrid(newGrid);

    const winnerCheck = checkWinner(newGrid);
    if (winnerCheck) {
      setWinner(winnerCheck === "blue" ? "user" : "ai");
      return;
    }

    if (player === "user") {
      setPlayer("ai");
      await handleAITurn(newGrid); // AI turn after user move
    } else {
      setPlayer("user");
    }
  };

  const handleAITurn = async (currentGrid) => {
    // Call your OpenAI API here
    console.log("fetching AI turn...");
    const response = await fetch("/api/getAiMove", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ grid: currentGrid }),
    });

    const { thisTurn } = await response.json();
    console.log("this is this turn", thisTurn);
    const colIndex = parseInt(thisTurn.charAt(1)) - 1; // Assuming format like 'c4'
    handleClick(colIndex);
  };

  const checkWinner = (grid) => {
    const rows = grid.length;
    const cols = grid[0].length;

    const checkLine = (a, b, c, d) => {
      return a !== null && a === b && a === c && a === d;
    };

    // Check horizontal lines
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols - 3; col++) {
        if (
          checkLine(
            grid[row][col],
            grid[row][col + 1],
            grid[row][col + 2],
            grid[row][col + 3]
          )
        ) {
          return grid[row][col];
        }
      }
    }

    // Check vertical lines
    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows - 3; row++) {
        if (
          checkLine(
            grid[row][col],
            grid[row + 1][col],
            grid[row + 2][col],
            grid[row + 3][col]
          )
        ) {
          return grid[row][col];
        }
      }
    }

    // Check diagonal lines (bottom-left to top-right)
    for (let row = 3; row < rows; row++) {
      for (let col = 0; col < cols - 3; col++) {
        if (
          checkLine(
            grid[row][col],
            grid[row - 1][col + 1],
            grid[row - 2][col + 2],
            grid[row - 3][col + 3]
          )
        ) {
          return grid[row][col];
        }
      }
    }

    // Check diagonal lines (top-left to bottom-right)
    for (let row = 0; row < rows - 3; row++) {
      for (let col = 0; col < cols - 3; col++) {
        if (
          checkLine(
            grid[row][col],
            grid[row + 1][col + 1],
            grid[row + 2][col + 2],
            grid[row + 3][col + 3]
          )
        ) {
          return grid[row][col];
        }
      }
    }

    return null;
  };

  const resetGame = () => {
    setGrid(Array(rows).fill(Array(columns).fill(null)));
    setPlayer("user");
    setWinner(null);
    setGameStarted(false);
  };

  const startGame = async () => {
    console.log("clicked start game");
    setGameStarted(true);
    const firstPlayer = Math.random() < 0.5 ? "user" : "ai";
    setPlayer(firstPlayer);
    console.log(firstPlayer);
    if (firstPlayer === "ai") {
      // Give the AI the first move
      setTimeout(async () => await handleAITurn(grid), 500); // Adding a slight delay for a better user experience
    }
  };

  const handleMouseEnter = (colIndex) => {
    if (winner || !gameStarted) return;
    const newGrid = grid.map((row) => row.slice());
    for (let row = 0; row < rows; row++) {
      if (!newGrid[row][colIndex]) {
        newGrid[row][colIndex] = "hover";
        break;
      }
    }
    setGrid(newGrid);
  };

  const handleMouseLeave = (colIndex) => {
    const newGrid = grid.map((row) => row.slice());
    for (let row = 0; row < rows; row++) {
      if (newGrid[row][colIndex] === "hover") {
        newGrid[row][colIndex] = null;
        break;
      }
    }
    setGrid(newGrid);
  };

  return (
    <div>
      <button onClick={startGame} disabled={gameStarted}>
        Start Game
      </button>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${cell}`}
                onClick={() => handleClick(colIndex)}
                onMouseEnter={() => handleMouseEnter(colIndex)}
                onMouseLeave={() => handleMouseLeave(colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
      {winner && (
        <div>
          <p>{winner === "blue" ? "You win!" : "AI wins!"}</p>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default ConnectFour;
