import Koa from 'koa';
import bodyParser from "koa-bodyparser";

import { UserRoutes } from './resources/users/user.router';
import { BoardsRoutes } from './resources/boards/board.router';
import { errorHundler } from './common/error';

const app = new Koa();
app.use(bodyParser());

app.use(errorHundler);

app.use(UserRoutes.routes())
  .use(UserRoutes.allowedMethods());

app.use(BoardsRoutes.routes())
  .use(BoardsRoutes.allowedMethods());

export { app };
