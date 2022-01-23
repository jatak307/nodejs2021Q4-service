import Router from '@koa/router';
import { Context, DefaultContext, DefaultState } from 'koa';
import { verifyToken } from '../../common/auth';
import { logger } from '../../logging/log';

import { TaskRoutes } from '../tasks/task.router';

import { getAllBoards, getBoardById, createBoard, updateBoard, deleteBoard } from './board.service';

const BoardsRoutes: Router<DefaultState, DefaultContext> = new Router({
  prefix: '/boards'
});

BoardsRoutes
  .get('/', verifyToken, async (ctx: Context) => {
    ctx.body= await getAllBoards();
    logger.http(`GET. Url: ${ctx.url}. 
      Response status - ${ctx.status}. 
      Params: ${JSON.stringify(ctx.params)}.
      Body: ${JSON.stringify(ctx.body)}`);
  })
  .get('/:id', verifyToken, async (ctx: Context) => {
    const boardId = ctx.params.id;
    const result = await getBoardById(boardId);
    ctx.body = result;
    logger.http(`GET. Url: ${ctx.url}. 
      Response status - ${ctx.status}. 
      Params: ${JSON.stringify(ctx.params)}. 
      Body: ${JSON.stringify(ctx.body)}`
    );
  })
  .post('/', verifyToken, async (ctx: Context) => {
    const inputData =  ctx.request.body;
    const board = await createBoard(inputData);
    ctx.status = 201;
    const { id, title, columns } = board;
    ctx.body = { id, title, columns };
    logger.http(`POST. Url: ${ctx.url}. 
      Response status - ${ctx.status}. 
      Params: ${JSON.stringify(ctx.params)}.
      Body: ${JSON.stringify(ctx.body)}`);
  })
  .put('/:id', verifyToken, async (ctx: Context) => {
    const boardId = ctx.params.id;
    const inputData =  ctx.request.body;
    const updatedBoard = await updateBoard(boardId, inputData);
    ctx.body = updatedBoard;
    ctx.status = 200;
    logger.http(`PUT. Url: ${ctx.url}. 
      Response status - ${ctx.status}. 
      Params: ${JSON.stringify(ctx.params)}. 
      Body: ${JSON.stringify(ctx.body)}`);
  })
  .delete('/:id', verifyToken, async (ctx: Context) => {
    const boardId = ctx.params.id;
    await deleteBoard(boardId);
    ctx.status = 204;
    logger.http(`DELETE. Url: ${ctx.url}. 
      Response status - ${ctx.status}. 
      Params: ${JSON.stringify(ctx.params)}.`);
  });

BoardsRoutes.use('/:id', TaskRoutes.routes(), TaskRoutes.allowedMethods());

export { BoardsRoutes };
