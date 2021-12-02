const Task = require('./task.model');

const tasksData = new Map();

const getAllTasks = () => [...tasksData.values()];

const getTaskById = (id) => tasksData.get(id);

const createTask = (obj) => {
  const task = new Task(obj);
  tasksData.set(task.id, task);
  return task;
};

module.exports = { getAllTasks, getTaskById, createTask };