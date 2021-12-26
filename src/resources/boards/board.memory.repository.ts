import { Board } from './board.model';
import { CreateBoard } from './board.models';

/**
 * This is a collection of data of type {@link Board}. At first it is empty collection
 */
const boardsData: Map<string, Board> = new Map();

/**
 * Gets boards from the database
 * @returns Array of {@link Board} or empty array
 */
function getBoards(): Board[] {
  return [...boardsData.values()];
}

/**
 * Gets board from the database
 * @param id board ID
 * @returns Object of type {@link Board} or undefined
 */
function getOneBoard(id: string): Board | undefined {
  return boardsData.get(id);
}

/**
 * Creates a new board and writes it to the database
 * @param obj object of type CreateBoard
 * @returns Object of type {@link Board} 
 */
function createNewBoard(obj: CreateBoard): Board {
  const board = new Board(obj);
  boardsData.set(board.id, board);
  return board;
}

/**
 * Updates board
 * @param id board ID
 * @param body object of type {@link CreateBoard | CreateBoard interface}
 * @returns Object of type {@link Board} with changed properties
 */
function updateBoardById(id: string, body: CreateBoard): Board {
  let updatedBoard = boardsData.get(id);
  updatedBoard = { id, ...body };
  boardsData.set(id, updatedBoard);
  return updatedBoard;
}

/**
 * Removes the board with the specified ID from the database
 * @param id board ID
 */
function deleteBoardById(id: string): void {
  boardsData.delete(id);
}
export { getBoards, getOneBoard, createNewBoard, updateBoardById, deleteBoardById };