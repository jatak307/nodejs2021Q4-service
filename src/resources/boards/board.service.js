/* eslint-disable no-return-await */
const boardsRepo = require('./board.memory.repository');

const getAllBoards = async () => await boardsRepo.getBoards();
const getBoardById = async (id) => await boardsRepo.getBoard(id);
const createBoard = async (data) => await boardsRepo.createBoard(data);

module.exports = { getAllBoards, getBoardById, createBoard };