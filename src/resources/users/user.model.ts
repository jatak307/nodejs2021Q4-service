import { v4 as uuidV4 } from 'uuid';

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

  static toResponse(user: User) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export { User };
