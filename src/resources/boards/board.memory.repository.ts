import { Board } from '../../entity/board.model';
import { CreateBoard } from './board.models';

/**
 * Gets boards from the database
 * @returns Array of {@link Board} or empty array
 */
async function getBoards(): Promise<Board[]> {
  const bords = await Board.find();  
  return bords;
}

/**
 * Gets board from the database
 * @param id board ID
 * @returns Object of type {@link Board} or undefined
 */
async function getOneBoard(id: string): Promise<Board | undefined> {
  const board = await Board.findOne(id);
  return board;
}

/**
 * Creates a new board and writes it to the database
 * @param obj object of type CreateBoard
 * @returns Object of type {@link Board} 
 */
async function createNewBoard(obj: Board): Promise<Board> {
  const board = Board.create(obj);
  await Board.save(board);
  return board;
}

/**
 * Updates board
 * @param id board ID
 * @param body object of type {@link CreateBoard | CreateBoard interface}
 * @returns Object of type {@link Board} with changed properties
 */
async function updateBoardById(id: string, body: CreateBoard): Promise<Partial<Board> | undefined > {  
  let updatedBoard: Partial<Board> | undefined = await getOneBoard(id);
  updatedBoard = {
    id, ...body
  }
  await Board.getRepository().save(updatedBoard)
  return updatedBoard
}

/**
 * Removes the board with the specified ID from the database
 * @param id board ID
 */
async function deleteBoardById(id: string): Promise<void> {
  const board = await Board.findOne(id)
  await board?.remove()
}

export { getBoards, getOneBoard, createNewBoard, updateBoardById, deleteBoardById };