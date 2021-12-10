import Router from '@koa/router';

import { getAll, getById, create, update, deleteUser } from './user.service';

const UserRoutes = new Router({
  prefix: '/users'
});

UserRoutes
  .get('/', async (ctx) => {
    ctx.body = await getAll();
  })
  .get('/:id', async (ctx) => {
    const userId = ctx.params.id;
    const result = await getById(userId);
    if (result) {
      ctx.body = result;
    } else {
      ctx.body = `Person with ID ${userId} not found`;
      ctx.status = 404;
    }
  })
  .post('/', async (ctx) => {
    const inputData = ctx.request.body;
    const user = await create(inputData);
    ctx.status = 201;
    const { id, name, login } = user;
    ctx.body = { id, name, login };
  })
  .put('/:id', async (ctx) => {
    const userId = ctx.params.id;
    const inputData = ctx.request.body;
    const updatedUser = await update(userId, inputData);
    ctx.body = updatedUser;
    ctx.status = 200;
  })
  .delete('/:id', async (ctx) => {
    const userId = ctx.params.id;
    await deleteUser(userId);
    ctx.status = 204;
  });

export { UserRoutes };
