/* eslint-disable no-return-await */
const tasksRepo = require('./task.memory.repository');

const getAllTasks = async () => await tasksRepo.getAllTasks();
const getTaskById = async (id) => await tasksRepo.getTaskById(id);
const createTask = async (data) => await tasksRepo.createTask(data);
const updateTask = async (id, body) => {
  const oldTask = await getTaskById(id);
  const taskData = {
    title: body.title || oldTask.title,
    order: body.order || oldTask.order,
    description: body.description || oldTask.description,
    userId: oldTask.userId,
    boardId: body.boardId || oldTask.boardId,
    columnId: body.columnId || oldTask.columnId
  };

  return await tasksRepo.updateTask(id, taskData);
};
const deleteTask = async (id) => await tasksRepo.deleteTask(id);

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };