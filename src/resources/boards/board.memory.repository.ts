import { Board } from './board.model';
import { CreateBoard } from './board.models';

const boardsData: Map<string, Board> = new Map();

const getBoards = (): Board[] => [...boardsData.values()];

const getOneBoard = (id: string) => boardsData.get(id);

const createNewBoard = (obj: CreateBoard) => {
  const board = new Board(obj);
  boardsData.set(board.id, board);
  return board;
};

const updateBoardById = (id: string, body: CreateBoard) => {
  let updatedBoard = boardsData.get(id);
  updatedBoard = { id, ...body };
  boardsData.set(id, updatedBoard);
  return updatedBoard;
};

const deleteBoardById = (id: string) => boardsData.delete(id);

export { getBoards, getOneBoard, createNewBoard, updateBoardById, deleteBoardById };