import Koa from 'koa';
import bodyParser from "koa-bodyparser";

import { UserRoutes } from './resources/users/user.router';
import { BoardsRoutes } from './resources/boards/board.router';
import { errorHundler } from './common/error';
import { logger } from './log';

/**
 * Instantiate koa
 */
const app: Koa<Koa.DefaultState, Koa.DefaultContext> = new Koa();

app.use(bodyParser());

app.use(errorHundler);

app.use(UserRoutes.routes())
  .use(UserRoutes.allowedMethods());

app.use(BoardsRoutes.routes())
  .use(BoardsRoutes.allowedMethods());

process.on('uncaughtException', errorHundler);

throw Error('Oops!');

export { app };
