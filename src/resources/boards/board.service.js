const boardsRepo = require('./board.memory.repository');
const { getAllTasks, deleteTask } = require('../tasks/task.service');

const getAllBoards = async () => {
  const allBoards = await boardsRepo.getBoards();
  return allBoards;
};

const getBoardById = async (id) => {
  const board = await boardsRepo.getBoard(id);
  return board;
};

const createBoard = async (data) => {
  const createdBoard = await boardsRepo.createBoard(data);
  return createdBoard;
};

const updateBoard = async (id, body) => {
  const oldBoard = await getBoardById(id);
  const boardData = {
    title: body.title || oldBoard.title,
    columns: body.columns || oldBoard.columns
  };
  const updatedBoard = await boardsRepo.updateBoard(id, boardData);
  return updatedBoard;
};

const deleteBoard = async (id) => {
  const tasks = await getAllTasks();
  tasks.forEach((task) => {
    if (task.boardId === id) deleteTask(task.id);
  });
  await boardsRepo.deleteBoard(id);
};

module.exports = { getAllBoards, getBoardById, createBoard, updateBoard, deleteBoard };