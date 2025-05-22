import { createEmptyBoard } from './grid';
import { isValidMove } from './validate';

const board = createEmptyBoard();

// Showing the process of creating and updating Board manually. Much more visually represented here:
console.log("Initial Board:");
console.table(board);

const move1 = isValidMove(board, 0, 0, 5);
console.log(`Move (0, 0, 5): ${move1 ? 'Valid' : 'Invalid'}`);

const move2 = isValidMove(board, 0, 1, 5); // Duplicate row value
console.log(`Move (0, 1, 5): ${move2 ? 'Valid' : 'Invalid'}`);

board[0][0] = 5;
if (isValidMove(board, 0, 1, 3)) {
  board[0][1] = 3;
}

console.log("Updated Board:");
console.table(board);
