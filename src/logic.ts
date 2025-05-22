import { Board } from './types';
import { isValidMove } from './validate';

export function solveSudoku(board: Board): boolean {

  for (let row = 0; row < 9; row++) 
    {
        for (let col = 0; col < 9; col++) {

            if (board[row][col] === null) {

                for (let num = 1; num <= 9; num++) {
                    if (isValidMove(board, row, col, num)) {
                        board[row][col] = num;

                        if (solveSudoku(board)) {
                        return true;
                        }
                        
                        board[row][col] = null; // backtrack
                    }
                }
                return false; // No valid number found
            }
        }
    }

  return true; // Solved
}
