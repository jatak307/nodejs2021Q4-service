import { BaseContext } from 'koa';

type ErrorHundler = (
  ctx: BaseContext, 
  next: () => Promise<unknown>
) => Promise<void>;

/**
 * This function is a middleware for catching errors.
 * @param ctx Context object that encapsulates an incoming http message and the corresponding response to that message
 * @param next Promise
 */
const errorHundler: ErrorHundler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    const error = err as Error;
    ctx.status = 500;
    ctx.body = {
      message: error.message
    };
  }
};

export {
  ErrorHundler,
  errorHundler
}