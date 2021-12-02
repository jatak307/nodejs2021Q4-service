/* eslint-disable no-return-await */
const boardsRepo = require('./board.memory.repository');

const getAllBoards = async () => await boardsRepo.getBoards();
const getBoardById = async (id) => await boardsRepo.getBoard(id);
const createBoard = async (data) => await boardsRepo.createBoard(data);
const updateBoard = async (id, body) => {
  const oldBoard = await getBoardById(id);
  const boardData = {
    title: body.title || oldBoard.title,
    columns: body.columns || oldBoard.columns
  };
  return await boardsRepo.updateBoard(id, boardData);
};
const deleteBoard = async (id) => await boardsRepo.deleteBoard(id);

module.exports = { getAllBoards, getBoardById, createBoard, updateBoard, deleteBoard };