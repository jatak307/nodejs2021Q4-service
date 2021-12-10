import { Board } from './board.model';
import { CreateBoard } from './board.models';

const boardsData: Map<string, Board> = new Map();

function getBoards(): Board[] {
  return [...boardsData.values()];
}

function getOneBoard(id: string): Board | undefined {
  return boardsData.get(id);
}

function createNewBoard(obj: CreateBoard): Board {
  const board = new Board(obj);
  boardsData.set(board.id, board);
  return board;
}

function updateBoardById(id: string, body: CreateBoard): Board {
  let updatedBoard = boardsData.get(id);
  updatedBoard = { id, ...body };
  boardsData.set(id, updatedBoard);
  return updatedBoard;
}

function deleteBoardById(id: string): void {
  boardsData.delete(id);
}
export { getBoards, getOneBoard, createNewBoard, updateBoardById, deleteBoardById };