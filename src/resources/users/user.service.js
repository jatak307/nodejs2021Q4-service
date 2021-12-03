const usersRepo = require('./user.memory.repository');
const { getAllTasks } = require('../tasks/task.service');

const getAll = async () => {
  const allUsers = await usersRepo.getUsers();
  return allUsers;
};

const getById = async (id) => {
  const user = await usersRepo.getUser(id);
  return user;
};

const create = async (data) => {
  const createdUser = await usersRepo.createUser(data);
  return createdUser;
};

const update = async (id, body) => {
  const oldUser = await getById(id);
  const userData = {
    name: body.name || oldUser.name,
    login: body.login || oldUser.login,
    password: body.password || oldUser.password
  };
  const updatedUser = await usersRepo.updateUser(id, userData);
  return updatedUser;
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
