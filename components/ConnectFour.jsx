import React, { useState } from "react";
import styles from "./connectFour.module.css";

export const ConnectFour = () => {
  const rows = 6;
  const columns = 7;
  const [grid, setGrid] = useState(
    Array(rows)
      .fill(null)
      .map(() => Array(columns).fill(null))
  );
  const [player, setPlayer] = useState("user"); // 'user' or 'ai'
  const [winner, setWinner] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [highlightedCol, setHighlightedCol] = useState(null);

  const addMove = (col) => {
    console.log(col);
    const newGrid = grid.map((row) => row.slice());
    for (let row = rows - 1; row >= 0; row--) {
      if (!newGrid[row][col]) {
        newGrid[row][col] = player === "user" ? "blue" : "red";
        break;
      }
    }
    setGrid(newGrid);
    return newGrid;
  };

  const handleClick = async (col) => {
    if (winner || !gameStarted) return; // Prevent clicks if game is over or game hasn't started

    const newGrid = addMove(col);

    const winnerCheck = checkWinner(newGrid);

    if (winnerCheck) {
      setWinner(winnerCheck === "blue" ? "user" : "ai");
      return;
    }
    setPlayer("ai");
    await handleAITurn(newGrid); // AI turn after user move
  };

  const handleAiTurnEnd = async (col) => {
    if (winner || !gameStarted) return; // Prevent clicks if game is over or game hasn't started
    if (typeof col == "string") col = parseInt(col);
    const newGrid = addMove(col);

    const winnerCheck = checkWinner(newGrid);

    if (winnerCheck) {
      setWinner(winnerCheck === "blue" ? "user" : "ai");
      return;
    }
    setPlayer("user");
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
    handleAiTurnEnd(colIndex);
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
    setGrid(
      Array(rows)
        .fill(null)
        .map(() => Array(columns).fill(null))
    );
    setPlayer("user");
    setWinner(null);
    setGameStarted(false);
  };

  const startGame = async () => {
    console.log("clicked start game");
    setGameStarted(true);
    const firstPlayer = Math.random() < 0.5 ? "user" : "ai";
    setPlayer(firstPlayer);
    if (firstPlayer === "ai") {
      // Give the AI the first move
      setTimeout(async () => await handleAITurn(grid), 500); // Adding a slight delay for a better user experience
    }
  };

  const handleMouseEnter = (colIndex) => {
    setHighlightedCol(colIndex);
  };

  const handleMouseLeave = () => {
    setHighlightedCol(null);
  };

  return (
    <div>
      <button
        className={styles["connect-four-button"]}
        onClick={startGame}
        disabled={gameStarted}
      >
        Start Game
      </button>
      <div className={styles.grid}>
        {grid[0].map((_, colIndex) => (
          <div key={colIndex} className={styles.column}>
            {grid.map((row, rowIndex) => {
              let highlight =
                highlightedCol === colIndex ? styles.highlight : "";
              return (
                <div
                  key={rowIndex}
                  className={`${styles.cell} ${
                    styles[row[colIndex]]
                  } ${highlight}`}
                  onClick={() => handleClick(colIndex)}
                  onMouseEnter={() => handleMouseEnter(colIndex)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* {row[colIndex]} */}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {winner && (
        <div>
          <p>{winner === "blue" ? "You win!" : "AI wins!"}</p>
          <button className={styles["connect-four-button"]} onClick={resetGame}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default ConnectFour;
