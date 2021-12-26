import { BaseContext } from 'koa';
import { StatusCodes } from 'http-status-codes';

import { logger } from '../logging/log';


type ErrorHundler = (
  ctx: BaseContext, 
  next: () => Promise<unknown>
) => Promise<void>;


class CustomError extends Error {
  public statusCode: number;

  public message: string;

  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

/**
 * This function is a middleware for catching errors.
 * @param ctx Context object that encapsulates an incoming http message and the corresponding response to that message
 * @param next Promise
 */
const errorHundler: ErrorHundler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    // const error = err as Error;
    // logger.error(`${error.message}; ${error.message}`);
    // ctx.status = 500;
    // ctx.body = {
    //   message: error.message
    // };

    if (err instanceof CustomError) {
      logger.error(`CUSTOMERROR. Status code: ${err.statusCode}. Error message: ${err.message}`);
      ctx.status = err.statusCode;
      ctx.body = {
        message: err.message
      };
      // res.status(err.statusCode).json({
      //   status: 'error',
      //   statusCode: err.statusCode,
      //   message: err.message,
      // });
    } else {
      logger.error(`Status code: 500. Internal Server Error.`);
      ctx.status = StatusCodes.INTERNAL_SERVER_ERROR;
      ctx.body = {
        message: 'Internal Server Error.'
      };
      // res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      //   status: 'Internal Server Error',
      //   message: err.message,
      // });
    }
  }
};

export {
  ErrorHundler,
  errorHundler,
  CustomError
}