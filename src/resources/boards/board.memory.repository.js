const Board = require('./board.model');

const boardsData = new Map();

const getBoards = () => [...boardsData.values()];

const getBoard = (id) => boardsData.get(id);

const createBoard = (obj) => {
  const board = new Board(obj);
  boardsData.set(board.id, board);
  return board;
};

module.exports = { getBoards, getBoard, createBoard };