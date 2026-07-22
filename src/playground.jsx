import { useState, useEffect } from "react";
import Navbar from "./components/navbar";

// Winning line combinations
const WINNING_COMBOS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

// Helper: Check for winner or draw on any given board
const checkBoardWinner = (board) => {
  for (let [a, b, c] of WINNING_COMBOS) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // 'X' or 'O'
    }
  }
  if (board.every((sq) => sq !== null)) {
    return "Draw";
  }
  return null;
};

// --- Minimax Logic ---
const minimax = (board, depth, isMaximizing) => {
  const result = checkBoardWinner(board);
  if (result === "O") return 10 - depth; // AI wins (favour faster wins)
  if (result === "X") return depth - 10; // Human wins (favour delayed loss)
  if (result === "Draw") return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === null) {
        board[i] = "O";
        let score = minimax(board, depth + 1, false);
        board[i] = null;
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === null) {
        board[i] = "X";
        let score = minimax(board, depth + 1, true);
        board[i] = null;
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
};

// Best move calculator using Minimax
const getBestMove = (board) => {
  let bestScore = -Infinity;
  let move = null;
  for (let i = 0; i < 9; i++) {
    if (board[i] === null) {
      board[i] = "O";
      let score = minimax(board, 0, false);
      board[i] = null;
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
};

export default function Playground() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isHumanTurn, setIsHumanTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [difficulty, setDifficulty] = useState("unbeatable"); // 'easy' | 'medium' | 'unbeatable'

  // Human move handler
  const handleSquareClick = (index) => {
    if (board[index] || winner || !isHumanTurn) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);

    const result = checkBoardWinner(newBoard);
    if (result) {
      setWinner(result);
    } else {
      setIsHumanTurn(false);
    }
  };

  // Computer move algorithm trigger
  useEffect(() => {
    if (!isHumanTurn && !winner) {
      const timer = setTimeout(() => {
        const availableIndices = board
          .map((val, idx) => (val === null ? idx : null))
          .filter((val) => val !== null);

        if (availableIndices.length > 0) {
          let aiChoice;

          if (difficulty === "easy") {
            // Pure random move
            aiChoice = availableIndices[Math.floor(Math.random() * availableIndices.length)];
          } else if (difficulty === "medium") {
            // 50% chance optimal minimax, 50% chance random
            if (Math.random() > 0.5) {
              aiChoice = getBestMove(board);
            } else {
              aiChoice = availableIndices[Math.floor(Math.random() * availableIndices.length)];
            }
          } else {
            // 'unbeatable' — 100% Minimax
            aiChoice = getBestMove(board);
          }

          const newBoard = [...board];
          newBoard[aiChoice] = "O";
          setBoard(newBoard);

          const result = checkBoardWinner(newBoard);
          if (result) {
            setWinner(result);
          } else {
            setIsHumanTurn(true);
          }
        }
      }, 350);

      return () => clearTimeout(timer);
    }
  }, [isHumanTurn, board, winner, difficulty]);

  // Restart handler
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setIsHumanTurn(true);
  };

  return (
    <>
      <Navbar />
      <section className="main">
        <div className="intro">
          <h2 className="animate-name">PLAYGROUND</h2>
          <p className="introp">LABS & EXPERIMENTS</p>
          <p>A collection of raw ideas, UI explorations, and technical prototypes.</p>
        </div>

        {/* Tic-Tac-Toe Game */}
        <div className="projects">

            <div className="linethrough"></div>

          <div className="tictactoe-container">
            {/* Difficulty Selector */}
            <div className="difficulty-picker">
              <label>Difficulty: </label>
              <select 
                value={difficulty} 
                onChange={(e) => { setDifficulty(e.target.value); resetGame(); }}
                className="select-difficulty"
              >
                <option value="easy">Easy (Casual)</option>
                <option value="medium">Medium (Tactical)</option>
                <option value="unbeatable">Unbeatable (Minimax AI)</option>
              </select>
            </div>

            {/* Game Status */}
            <div className="game-status">
              {winner === "X" && <p className="status-win">You Won!</p>}
              {winner === "O" && <p className="status-loss">Computer Won!</p>}
              {winner === "Draw" && <p className="status-draw">It's a Draw!</p>}
              {!winner && (
                <p>{isHumanTurn ? "Your turn (X)" : "Computer thinking (O)..."}</p>
              )}
            </div>

            {/* 3x3 Grid */}
            <div className="tic-board">
              {board.map((value, idx) => (
                <button
                  key={idx}
                  className={`tic-square ${value ? value.toLowerCase() : ""}`}
                  onClick={() => handleSquareClick(idx)}
                  disabled={!!value || !!winner || !isHumanTurn}
                >
                  {value}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="game-controls">
              <button className="btn-restart" onClick={resetGame}>
                Restart Game
              </button>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}