import { User } from './user.model';
import { CreateUser } from './user.models';

const usersData: Map<string, User> = new Map();

const getUsers = (): User[] => [...usersData.values()];

const getUser = (id: string): User | undefined => usersData.get(id);

const createUser = (obj: CreateUser): User => {
  const user = new User(obj);
  usersData.set(user.id, user);
  return user;
};

const updateUser = (id: string, body: CreateUser): User => {
  let updatedUser = usersData.get(id);
  updatedUser = { id, ...body };
  usersData.set(id, updatedUser);
  return updatedUser;
};

const removeUser = (id: string) => usersData.delete(id);

export { getUsers, getUser, createUser, updateUser, removeUser };
