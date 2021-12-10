import Router from '@koa/router';
import { Context, DefaultContext, DefaultState } from 'koa';

import { TaskRoutes } from '../tasks/task.router';

import { getAllBoards, getBoardById, createBoard, updateBoard, deleteBoard } from './board.service';

const BoardsRoutes: Router<DefaultState, DefaultContext> = new Router({
  prefix: '/boards'
});

BoardsRoutes
  .get('/', async (ctx: Context) => {
    ctx.body= await getAllBoards();
  })
  .get('/:id', async (ctx: Context) => {
    const boardId = ctx.params.id;
    const result = await getBoardById(boardId);
    if (result) {
      ctx.body = result;
    } else {
      ctx.body = `Person with ID ${boardId} not found`;
      ctx.status = 404;
    }
  })
  .post('/', async (ctx: Context) => {
    const inputData =  ctx.request.body;
    const board = await createBoard(inputData);
    ctx.status = 201;
    const { id, title, columns } = board;
    ctx.body = { id, title, columns };
  })
  .put('/:id', async (ctx: Context) => {
    const boardId = ctx.params.id;
    const inputData =  ctx.request.body;
    const updatedBoard = await updateBoard(boardId, inputData);
    ctx.body = updatedBoard;
    ctx.status = 200;
  })
  .delete('/:id', async (ctx: Context) => {
    const boardId = ctx.params.id;
    await deleteBoard(boardId);
    ctx.status = 204;
  });

BoardsRoutes.use('/:id', TaskRoutes.routes(), TaskRoutes.allowedMethods());

export { BoardsRoutes };
