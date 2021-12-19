const Board = require('./board.model');

const boardsData = new Map();

const getBoards = () => [...boardsData.values()];

const getBoard = (id) => boardsData.get(id);

const createBoard = (obj) => {
  const board = new Board(obj);
  boardsData.set(board.id, board);
  return board;
};

const updateBoard = (id, body) => {
  let updatedBoard = boardsData.get(id);
  updatedBoard = { id, ...body };
  boardsData.set(id, updatedBoard);
  return updatedBoard;
};

const deleteBoard = (id) => boardsData.delete(id);

module.exports = { getBoards, getBoard, createBoard, updateBoard, deleteBoard };