const Task = require('./task.model');

const tasksData = new Map();

const getAllTasks = () => [...tasksData.values()];

const getTaskById = (id) => tasksData.get(id);

const createTask = (obj) => {
  const task = new Task(obj);
  tasksData.set(task.id, task);
  return task;
};

const updateTask = (id, body) => {
  let updatedTask = tasksData.get(id);
  updatedTask = { id, ...body };
  tasksData.set(id, updatedTask);
  return updatedTask;
};

const deleteTask = (id) => tasksData.delete(id);

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };