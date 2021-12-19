const tasksRepo = require('./task.memory.repository');

const getAllTasks = async () => {
  const allTasks = await tasksRepo.getAllTasks();
  return allTasks;
};

const getTaskById = async (id) => {
  const task = await tasksRepo.getTaskById(id);
  return task;
};

const createTask = async (data) => {
  const createdTask = await tasksRepo.createTask(data);
  return createdTask;
};

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
  const updatedTask = await tasksRepo.updateTask(id, taskData);
  return updatedTask;
};

const deleteTask = async (id) => {
  await tasksRepo.deleteTask(id);
}

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };