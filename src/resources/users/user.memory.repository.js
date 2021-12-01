const User = require('./user.model');

const usersData = new Map();

const getUsers = () => [...usersData.values()];

const getUser = (id) => usersData.get(id);

const createUser = (obj) => {
  const user = new User(obj);
  usersData.set(user.id, user);
  return user;
};

const updateUser = (id, body) => {
  let updatedUser = usersData.get(id);
  updatedUser = { id, ...body };
  usersData.set(id, updatedUser);
  return updatedUser;
};

const removeUser = (id) => usersData.delete(id);

module.exports = { getUsers, getUser, createUser, updateUser, removeUser };
