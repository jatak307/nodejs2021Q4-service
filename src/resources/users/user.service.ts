import { StatusCodes } from 'http-status-codes';
import { getUsers, getUser, createUser, updateUser, removeUser } from './user.memory.repository';
import { CreateUser, UpdateUser } from './user.models';

import { getAllTasks } from '../tasks/task.service';
import { Task } from '../../entity/task.model';
import { CustomError } from '../../common/error';

import { User as UserDB } from '../../entity/user.model';

/**
 * Waits to receive an array of users from the database
 * @returns a promise of an array of users
 */
async function getAll(): Promise<UserDB[]> {
  const allUsers: UserDB[] = await getUsers();
  return allUsers;
}

/**
 * Waits to get the user by ID 
 * @param id user ID
 * @returns User or undefined Promise
 */
async function getById(id: string): Promise<UserDB | undefined> {
  const user: UserDB | undefined = await getUser(id);
  if (user === undefined) {
    throw new CustomError(
      StatusCodes.NOT_FOUND,
      `User with ID ${id} not found`
    );
  }
  return user;
}

/**
 * Waits to create the user
 * @param body data for create user
 * @returns New User Promise
 */
async function create(data: UserDB): Promise<UserDB> {
  const createdUser: UserDB = await createUser(data);
  return createdUser;
}

/**
 * Waits to update the user by ID 
 * @param id user ID
 * @param body new data for this user
 * @returns Updated User Promise
 */
async function update(id: string, body: UpdateUser): Promise<UserDB | undefined> {
  const oldUser: UserDB | undefined = await getById(id);
  if (oldUser === undefined) {
    throw new CustomError(
      StatusCodes.NOT_FOUND,
      `User with ID ${id} not found`
    );
  }
  const userData: CreateUser = {
    name: body.name || oldUser.name,
    login: body.login || oldUser.login,
    password: body.password || oldUser.password
  };
  const updatedUser: UserDB | undefined = await updateUser(id, userData);
  return updatedUser;
}

/**
 * Waits to delete the user by ID;
 * for tasks created by this user, calls the method setUser()
 * @param id user ID
 */
async function deleteUser(id: string): Promise<void> {
  // await getById(id);
  // const tasks: Task[] = await getAllTasks();
  // tasks.forEach((task: Task) => {
  //   if (task.userId === id) {
  //     task.setUser();
  //   }
  // });
  await removeUser(id);
}

export { getAll, getById, create, update, deleteUser };
