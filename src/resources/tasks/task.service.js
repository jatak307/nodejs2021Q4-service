/* eslint-disable no-return-await */
const tasksRepo = require('./task.memory.repository');

const getAllTasks = async () => await tasksRepo.getAllTasks();
const getTaskById = async (id) => await tasksRepo.getTaskById(id);
const createTask = async (data) => await tasksRepo.createTask(data);

module.exports = { getAllTasks, getTaskById, createTask };