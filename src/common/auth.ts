import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { Context, Next } from 'koa';
import { config } from './config';

// eslint-disable-next-line consistent-return
const verifyToken = (ctx: Context, next: Next) => {
  const JWT_SECRET_KEY = { config };
  let token!: string;

  if (ctx.headers.authorization && ctx.headers.authorization.split(' ')[0] === 'Bearer') {
    [, token] = ctx.headers.authorization.split(' ');
  }

  if (!token) {
    ctx.status = 401;
    ctx.body = "The token is required for authentification";
  }

  try {
    const decode = jwt.verify(token, JWT_SECRET_KEY as unknown as string);
    return next();
  } catch(err) {
    ctx.body = 'Invalid Token';
    ctx.status = 401;
    console.log(err);
  }
}

const generateHash = async (password: string) => {
  const hash = await bcrypt.hash(password ,10);
  return hash;
}

export { 
  verifyToken,
  generateHash 
};