import { Board } from './types';

export function createEmptyBoard(): Board {
  const board: Board = [];

  for (let i = 0; i < 9; i++) {
    const row: (number | null)[] = [];
    for (let j = 0; j < 9; j++) {
      row.push(null);
    }
    board.push(row);
  }

  return board;
}

export function cloneBoard(board: Board): Board {
  const newBoard: Board = [];

  for (let i = 0; i < 9; i++) {
    newBoard.push([...board[i]]);
  }

  return newBoard;
}
