import { getUsers, getUser, createUser, updateUser, removeUser } from './user.memory.repository';
import { CreateUser, UpdateUser } from './user.models';
import { User } from './user.model';

import { getAllTasks } from '../tasks/task.service';

const getAll = async () => {
  const allUsers = await getUsers();
  return allUsers;
};

const getById = async (id: string): Promise<User | undefined> => {
  const user = await getUser(id);
  return user;
};

const create = async (data: CreateUser): Promise<User> => {
  const createdUser = await createUser(data);
  return createdUser;
};

const update = async (id: string, body: UpdateUser): Promise<User> => {
  const oldUser = await getById(id);
  if (oldUser === undefined) throw new Error("User not found");
  const userData = {
    name: body.name || oldUser.name,
    login: body.login || oldUser.login,
    password: body.password || oldUser.password
  };
  const updatedUser = await updateUser(id, userData);
  return updatedUser;
};

const deleteUser = async (id: string): Promise<void> => {
  const tasks = await getAllTasks();
  tasks.forEach((task) => {
    if (task.userId === id) {
      // task.setUser();
      // eslint-disable-next-line no-param-reassign
      task.userId = null;
    }
  });
  await removeUser(id);
};

export { getAll, getById, create, update, deleteUser };
