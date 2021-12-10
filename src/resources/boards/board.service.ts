import { 
  getBoards, 
  getOneBoard, 
  createNewBoard, 
  updateBoardById, 
  deleteBoardById  
} from './board.memory.repository';

import { CreateBoard, UpdateBoard } from './board.models';
import { getAllTasks, deleteTask } from '../tasks/task.service';

const getAllBoards = async () => {
  const allBoards = await getBoards();
  return allBoards;
};

const getBoardById = async (id: string) => {
  const board = await getOneBoard(id);
  return board;
};

const createBoard = async (data: CreateBoard) => {
  const createdBoard = await createNewBoard(data);
  return createdBoard;
};

const updateBoard = async (id: string, body: UpdateBoard) => {
  const oldBoard = await getBoardById(id);
  if (oldBoard === undefined) throw new Error("Board not found");
  const boardData = {
    title: body.title || oldBoard.title,
    columns: body.columns || oldBoard.columns
  };
  const updatedBoard = await updateBoardById(id, boardData);
  return updatedBoard;
};

const deleteBoard = async (id: string) => {
  const tasks = await getAllTasks();
  tasks.forEach((task) => {
    if (task.boardId === id) deleteTask(task.id);
  });
  await deleteBoardById(id);
};

export { getAllBoards, getBoardById, createBoard, updateBoard, deleteBoard };