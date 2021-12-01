const Router = require('@koa/router');

const { getAll, getById, create, update, deleteUser } = require('./user.service');

const router = new Router({
  prefix: '/users'
});

router
  .get('/', async (ctx) => {
    ctx.body= await getAll();
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
    const inputData =  ctx.request.body;
    const user = await create(inputData);
    ctx.status = 201;
    ctx.body = user;
  })
  .put('/:id', async (ctx) => {
    const userId = ctx.params.id;
    const inputData =  ctx.request.body;
    const updateUser = await update(userId, inputData);
    ctx.status = 200;
    ctx.body = updateUser;
  })
  .delete('/:id', async (ctx) => {
    const userId = ctx.params.id;
    await deleteUser(userId);
    ctx.status = 204;
  });

// .post('/product', koaBody, async (ctx, next) => {
//   ctx.status = 201;
//   ctx.body = await product.create(ctx.request.body)
// })
// .put('/product/:id', koaBody, async (ctx, next) => {
//   ctx.status = 204;
//   await product.update(ctx.params.id, ctx.request.body);
// })
// .delete('/product/:id', async (ctx, next) => {
//   ctx.status = 204;
//   await product.delete(ctx.params.id);
// });

module.exports = router;
