const Router = require('@koa/router');

const router = new Router({
  prefix: '/boards'
});

router
  .get('/', async (ctx) => {
    ctx.body = { name: "boards" };
  });

module.exports = router;
