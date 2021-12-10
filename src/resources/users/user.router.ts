import Router from '@koa/router';
import { Context, DefaultContext, DefaultState } from 'koa';

import { getAll, getById, create, update, deleteUser } from './user.service';

const UserRoutes: Router<DefaultState, DefaultContext> = new Router({
  prefix: '/users'
});

UserRoutes
  .get('/', async (ctx: Context) => {
    ctx.body = await getAll();
  })
  .get('/:id', async (ctx: Context) => {
    const userId = ctx.params.id;
    const result = await getById(userId);
    if (result) {
      ctx.body = result;
    } else {
      ctx.body = `Person with ID ${userId} not found`;
      ctx.status = 404;
    }
  })
  .post('/', async (ctx: Context) => {
    const inputData = ctx.request.body;
    const user = await create(inputData);
    ctx.status = 201;
    const { id, name, login } = user;
    ctx.body = { id, name, login };
  })
  .put('/:id', async (ctx: Context) => {
    const userId = ctx.params.id;
    const inputData = ctx.request.body;
    const updatedUser = await update(userId, inputData);
    ctx.body = updatedUser;
    ctx.status = 200;
  })
  .delete('/:id', async (ctx: Context) => {
    const userId = ctx.params.id;
    await deleteUser(userId);
    ctx.status = 204;
  });

export { UserRoutes };
