import * as bcrypt from 'bcryptjs';

const generateHash = async (password: string) => {
  const hash = bcrypt.hash(password, 15);
  return hash;
}

export {
  generateHash,
}