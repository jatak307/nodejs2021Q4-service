import { v4 as uuidV4 } from 'uuid';

/**
 * This class sets the state for the user object
 */
class User {
  id: string;

  name: string;

  login: string;

  password: string;

  constructor({
    id = uuidV4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }
}

export { User };
