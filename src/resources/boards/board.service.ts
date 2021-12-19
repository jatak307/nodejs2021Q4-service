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


/**
 * Waits to receive an array of boards from the database
 * @returns a promise of an array of boards
 */
async function getAllBoards(): Promise<Board[]> {
  const allBoards: Board[] = await getBoards();
  return allBoards;
}

/**
 * Waits to get the board by ID 
 * @param id board ID
 * @returns Board or undefined Promise
 */
async function getBoardById(id: string): Promise<Board | undefined> {
  const board: Board | undefined = await getOneBoard(id);
  return board;
}

/**
 * Waits to create the board
 * @param body data for create board
 * @returns New Board Promise
 */
async function createBoard(data: CreateBoard): Promise<Board> {
  const createdBoard: Board = await createNewBoard(data);
  return createdBoard;
}

/**
 * Waits to update the board by ID 
 * @param id board ID
 * @param body new data for this board
 * @returns Updated Board Promise
 */
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

/**
 * Waits to delete the board by ID;
 * deletes all tasks that were on this board
 * @param id board ID
 */
async function deleteBoard(id: string): Promise<void> {
  const tasks: Task[] = await getAllTasks();
  tasks.forEach((task: Task) => {
    if (task.boardId === id) deleteTask(task.id);
  });
  await deleteBoardById(id);
}

export { getAllBoards, getBoardById, createBoard, updateBoard, deleteBoard };