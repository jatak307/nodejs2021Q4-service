/* eslint-disable no-return-await */
const usersRepo = require('./user.memory.repository');
const { getAllTasks } = require('../tasks/task.service');

const getAll = async () => await usersRepo.getUsers();
const getById = async (id) => await usersRepo.getUser(id);
const create = async (data) => await usersRepo.createUser(data);
const update = async (id, body) => {
  const oldUser = await getById(id);
  const userData = {
    name: body.name || oldUser.name,
    login: body.login || oldUser.login,
    password: body.password || oldUser.password
  };
  return await usersRepo.updateUser(id, userData);
};
const deleteUser = async (id) => {
  const tasks = await getAllTasks();
  tasks.forEach((task) => {
    if (task.userId === id) {
      task.setUser();
    }
  });
  await usersRepo.removeUser(id);
};

module.exports = { getAll, getById, create, update, deleteUser };
