import { User } from './user.model';
import { CreateUser } from './user.models';

const usersData: Map<string, User> = new Map();

function getUsers(): User[] {
  return [...usersData.values()];
}

function getUser(id: string): User | undefined {
  return usersData.get(id);
}

function createUser(obj: CreateUser): User {
  const user: User = new User(obj);
  usersData.set(user.id, user);
  return user;
}

function updateUser(id: string, body: CreateUser): User {
  let updatedUser: User | undefined = usersData.get(id);
  updatedUser = { id, ...body };
  usersData.set(id, updatedUser);
  return updatedUser;
}

function removeUser(id: string): void {
  usersData.delete(id);
}

export { getUsers, getUser, createUser, updateUser, removeUser };
