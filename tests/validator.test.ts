import { Board } from '../src/types';
import { isValidMove } from '../src/validate';

const sampleBoard: Board = [
  [1, 4, null, null, 6, null, null, null, 9],
  [9, null, null, 3, 2, 1, null, null, null],
  [null, 5, 7, null, null, null, 6, 4, null],
  [3, null, null, null, 1, null, null, null, 2],
  [8, null, null, 5, null, 6, null, null, 7],
  [4, null, null, null, 3, null, null, null, 5],
  [null, 2, null, null, null, null, 1, 9, null],
  [null, null, null, 6, 7, 4, null, null, 8],
  [null, null, null, null, 5, null, null, 3, 6]
];

test('should return false if number exists in same row', () => {
  expect(isValidMove(sampleBoard, 0, 2, 1)).toBe(false); // 1 is in row 0
});

test('should return false if number exists in same column', () => {
  expect(isValidMove(sampleBoard, 2, 0, 9)).toBe(false); // 9 is in column 0
});

test('should return false if number exists in the 3x3 box', () => {
  expect(isValidMove(sampleBoard, 1, 1, 4)).toBe(false); // 4 is in top-left box
});

test('should return true for a valid move', () => {
  expect(isValidMove(sampleBoard, 0, 2, 2)).toBe(true); // 2 is safe
});
