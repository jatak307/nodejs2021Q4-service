const boardsRepo = require('./board.memory.repository');
const { getAllTasks, deleteTask } = require('../tasks/task.service');

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
const deleteBoard = async (id) => {
  const tasks = await getAllTasks();
  tasks.forEach((task) => {
    if (task.boardId === id) deleteTask(task.id);
  });
  return await boardsRepo.deleteBoard(id);
};

module.exports = { getAllBoards, getBoardById, createBoard, updateBoard, deleteBoard };