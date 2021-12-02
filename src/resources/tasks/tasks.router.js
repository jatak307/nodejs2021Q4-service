const Router = require('@koa/router');

// const { getAll, getById, create, update, deleteUser } = require('./user.service');

const router = new Router({
  prefix: '/tasks'
});

router
  .get('/', async (ctx) => {
    // ctx.body= await getAll();
    ctx.body = {newTask: "wdwedwed"}
  });

module.exports = router;
