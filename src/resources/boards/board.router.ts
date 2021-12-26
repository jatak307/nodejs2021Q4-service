import Router from '@koa/router';
import { Context, DefaultContext, DefaultState } from 'koa';
import { logger } from '../../logging/log';

import { TaskRoutes } from '../tasks/task.router';

import { getAllBoards, getBoardById, createBoard, updateBoard, deleteBoard } from './board.service';

const BoardsRoutes: Router<DefaultState, DefaultContext> = new Router({
  prefix: '/boards'
});

BoardsRoutes
  .get('/', async (ctx: Context) => {
    ctx.body= await getAllBoards();
    logger.http(`GET. Url: ${ctx.url}. 
      Response status - ${ctx.status}. 
      Params: ${JSON.stringify(ctx.params)}.
      Body: ${JSON.stringify(ctx.body)}`);
  })
  .get('/:id', async (ctx: Context) => {
    const boardId = ctx.params.id;
    const result = await getBoardById(boardId);
    if (result) {
      ctx.body = result;
      logger.http(`GET. Url: ${ctx.url}. 
        Response status - ${ctx.status}. 
        Params: ${JSON.stringify(ctx.params)}. 
        Body: ${JSON.stringify(ctx.body)}`
      );
    } else {
      ctx.body = `Person with ID ${boardId} not found`;
      ctx.status = 404;
      logger.http(`NOT FOUND. Url: ${ctx.url}. 
        Response status - ${ctx.status}.
        Body: ${ctx.body}`);
    }
  })
  .post('/', async (ctx: Context) => {
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
  .put('/:id', async (ctx: Context) => {
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
  .delete('/:id', async (ctx: Context) => {
    const boardId = ctx.params.id;
    await deleteBoard(boardId);
    ctx.status = 204;
    logger.http(`DELETE. Url: ${ctx.url}. 
      Response status - ${ctx.status}. 
      Params: ${JSON.stringify(ctx.params)}.`);
  });

BoardsRoutes.use('/:id', TaskRoutes.routes(), TaskRoutes.allowedMethods());

export { BoardsRoutes };
