import { getUsers, getUser, createUser, updateUser, removeUser } from './user.memory.repository';
import { CreateUser, UpdateUser } from './user.models';
import { User } from './user.model';

import { getAllTasks } from '../tasks/task.service';
import { Task } from '../tasks/task.model';

async function getAll(): Promise<User[]> {
  const allUsers: User[] = await getUsers();
  return allUsers;
}

async function getById(id: string): Promise<User | undefined> {
  const user: User | undefined = await getUser(id);
  return user;
}

async function create(data: CreateUser): Promise<User> {
  const createdUser: User = await createUser(data);
  return createdUser;
}

async function update(id: string, body: UpdateUser): Promise<User> {
  const oldUser: User | undefined = await getById(id);
  if (oldUser === undefined) throw new Error("User not found");
  const userData: CreateUser = {
    name: body.name || oldUser.name,
    login: body.login || oldUser.login,
    password: body.password || oldUser.password
  };
  const updatedUser: User = await updateUser(id, userData);
  return updatedUser;
}

async function deleteUser(id: string): Promise<void> {
  const tasks: Task[] = await getAllTasks();
  tasks.forEach((task: Task) => {
    if (task.userId === id) {
      task.setUser();
    }
  });
  await removeUser(id);
}

export { getAll, getById, create, update, deleteUser };
