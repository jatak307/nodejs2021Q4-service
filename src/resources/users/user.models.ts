interface CreateUser {
  name: string,
  login: string,
  password: string
}

interface UpdateUser {
  name?: string,
  login?: string,
  password?: string
}

export {
  CreateUser,
  UpdateUser
}