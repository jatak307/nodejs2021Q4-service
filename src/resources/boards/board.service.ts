import { 
  getBoards, 
  getOneBoard, 
  createNewBoard, 
  updateBoardById, 
  deleteBoardById  
} from './board.memory.repository';

import { CreateBoard, UpdateBoard } from './board.models';
import { getAllTasks, deleteTask } from '../tasks/task.service';
import { Board } from './board.model';
import { Task } from '../tasks/task.model';

async function getAllBoards(): Promise<Board[]> {
  const allBoards: Board[] = await getBoards();
  return allBoards;
}

async function getBoardById(id: string): Promise<Board | undefined> {
  const board: Board | undefined = await getOneBoard(id);
  return board;
}

async function createBoard(data: CreateBoard): Promise<Board> {
  const createdBoard: Board = await createNewBoard(data);
  return createdBoard;
}

async function updateBoard(id: string, body: UpdateBoard): Promise<Board> {
  const oldBoard: Board | undefined = await getBoardById(id);
  if (oldBoard === undefined) throw new Error("Board not found");
  const boardData: CreateBoard = {
    title: body.title || oldBoard.title,
    columns: body.columns || oldBoard.columns
  };
  const updatedBoard: Board = await updateBoardById(id, boardData);
  return updatedBoard;
}

async function deleteBoard(id: string): Promise<void> {
  const tasks: Task[] = await getAllTasks();
  tasks.forEach((task: Task) => {
    if (task.boardId === id) deleteTask(task.id);
  });
  await deleteBoardById(id);
}

export { getAllBoards, getBoardById, createBoard, updateBoard, deleteBoard };