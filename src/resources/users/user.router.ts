import Router from '@koa/router';
import { Context, DefaultContext, DefaultState } from 'koa';
import { logger } from '../../logging/log';

import { getAll, getById, create, update, deleteUser } from './user.service';

const UserRoutes: Router<DefaultState, DefaultContext> = new Router({
  prefix: '/users'
});

UserRoutes
  .get('/', async (ctx: Context) => {    
    ctx.body = await getAll();
    logger.http(`GET. Url: ${ctx.url}. Response status - ${ctx.status}. Params: ${JSON.stringify(ctx.params)}. ${JSON.stringify(ctx.body)}`);
    // logger.http('GET:', ctx);
  })
  .get('/:id', async (ctx: Context) => {
    const userId = ctx.params.id;
    const result = await getById(userId);
    if (result) {
      ctx.body = result;
      // const { url, status, params, body } = ctx;
      logger.http(
        `GET. 
        Url: ${ctx.url}. 
        Response status - ${ctx.status}. 
        Params: ${JSON.stringify(ctx.params)}. 
        Body: ${JSON.stringify(ctx.body)}`
      );
      // logger.http('GET:', ctx);
    } else {
      ctx.body = `Person with ID ${userId} not found`;
      ctx.status = 404;
      logger.http(`NOT FOUND. Url: ${ctx.url}. Response status - ${ctx.status}. ${ctx.body}`);
      // logger.http('NOT FOUND:', ctx);
    }
  })
  .post('/', async (ctx: Context) => {
    const inputData = ctx.request.body;
    const user = await create(inputData);
    ctx.status = 201;
    const { id, name, login } = user;
    ctx.body = { id, name, login };
    logger.http(`POST. Url: ${ctx.url}. Response status - ${ctx.status}. Params: ${JSON.stringify(ctx.params)}. ${JSON.stringify(ctx.body)}`);
    // logger.http('POST:', ctx);
  })
  .put('/:id', async (ctx: Context) => {
    const userId = ctx.params.id;
    const inputData = ctx.request.body;
    const updatedUser = await update(userId, inputData);
    ctx.body = updatedUser;
    ctx.status = 200;
    logger.http(`PUT. Url: ${ctx.url}. Response status - ${ctx.status}. Params: ${JSON.stringify(ctx.params)}. ${JSON.stringify(ctx.body)}`);
    // logger.http(ctx);
  })
  .delete('/:id', async (ctx: Context) => {
    const userId = ctx.params.id;
    await deleteUser(userId);
    ctx.status = 204;
    logger.http(`DELETE. Url: ${ctx.url}. Response status - ${ctx.status}. Params: ${JSON.stringify(ctx.params)}.`);
    // logger.http(ctx);
  });

export { UserRoutes };
