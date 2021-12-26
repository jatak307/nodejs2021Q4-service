import Koa from 'koa';
import bodyParser from "koa-bodyparser";

import { UserRoutes } from './resources/users/user.router';
import { BoardsRoutes } from './resources/boards/board.router';
import { errorHundler } from './common/error';
import { logger } from './logging/log';

/**
 * Instantiate koa
 */
const app: Koa<Koa.DefaultState, Koa.DefaultContext> = new Koa();

process
  .on('unhandledRejection', (err: Error) => {
    logger.error(`Unhandled rejection ${err.name}: ${err.message}`);
    setTimeout(() => {
      process.exit(1);
    }, 1000);
  })
  .on('uncaughtException', (err: Error) => {
    logger.error(`Uncaught Exception ${err.name}: ${err.message}`);
    setTimeout(() => {
      process.exit(1);
    }, 1000);
  });

app.use(errorHundler);

app.use(bodyParser());

app.use(UserRoutes.routes())
  .use(UserRoutes.allowedMethods());

app.use(BoardsRoutes.routes())
  .use(BoardsRoutes.allowedMethods());

// throw Error('Oops!');

// Promise.reject(Error('Oops!'));

export { app };
