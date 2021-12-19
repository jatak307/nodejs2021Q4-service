import { User } from './user.model';
import { CreateUser } from './user.models';

/**
 * This is a collection of data of type {@link User}. At first it is empty collection
 */
const usersData: Map<string, User> = new Map();

/**
 * Gets users from the database
 * @returns Array of {@link User} or empty array
 */
function getUsers(): User[] {
  return [...usersData.values()];
}

/**
 * Gets user from the database
 * @param id user ID
 * @returns Object of type {@link User} or undefined
 */
function getUser(id: string): User | undefined {
  return usersData.get(id);
}

/**
 * Creates a new user and writes it to the database
 * @param obj object of type CreateUser (with required fields name, login and password)
 * @returns Object of type {@link User} 
 */
function createUser(obj: CreateUser): User {
  const user: User = new User(obj);
  usersData.set(user.id, user);
  return user;
}

/**
 * Updates user
 * @param id user ID
 * @param body object of type {@link CreateUser | CreateUser interface}
 * @returns Object of type {@link User} with changed properties
 */
function updateUser(id: string, body: CreateUser): User {
  let updatedUser: User | undefined = usersData.get(id);
  updatedUser = { id, ...body };
  usersData.set(id, updatedUser);
  return updatedUser;
}

/**
 * Removes the user with the specified ID from the database
 * @param id user ID
 */
function removeUser(id: string): void {
  usersData.delete(id);
}

export { getUsers, getUser, createUser, updateUser, removeUser };
