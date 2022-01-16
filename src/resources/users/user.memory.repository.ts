import { Task } from '../../entity/task.model';
import { User as UserDB } from '../../entity/user.model';

import { CreateUser } from './user.models';

/**
 * This is a collection of data of type {@link User}. At first it is empty collection
 */
// const usersData: Map<string, User> = new Map();


/**
 * Gets users from the database
 * @returns Array of {@link User} or empty array
 */
async function getUsers(): Promise<UserDB[]> {
  const users = await UserDB.find();
  return users;
}

/**
 * Gets user from the database
 * @param id user ID
 * @returns Object of type {@link User} or undefined
 */
async function getUser(id: string): Promise<UserDB | undefined> {
  const user = await UserDB.findOne(id);
  return user;
}

/**
 * Creates a new user and writes it to the database
 * @param obj object of type CreateUser (with required fields name, login and password)
 * @returns Object of type {@link User} 
 */
async function createUser(obj: UserDB): Promise<UserDB> {
  const user = UserDB.create(obj);
  await UserDB.save(user);
  return user;
}

/**
 * Updates user
 * @param id user ID
 * @param body object of type {@link CreateUser | CreateUser interface}
 * @returns Object of type {@link User} with changed properties
 */
async function updateUser(id: string, body: CreateUser): Promise<UserDB | undefined> {
  await UserDB.update(id, {...body});
  const updatedUser: UserDB | undefined = await UserDB.findOne(id);
  return updatedUser;
}

/**
 * Removes the user with the specified ID from the database
 * @param id user ID
 */
async function removeUser(id: string): Promise<void> {
  const tasks = await Task.find({where: {boardId: id}});
  tasks.forEach(async(t) => {
    await Task.delete(t.id)
  });
  await UserDB.delete({id});
}

export { getUsers, getUser, createUser, updateUser, removeUser };
