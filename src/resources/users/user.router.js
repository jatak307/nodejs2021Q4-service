const Router = require('@koa/router');

const router = new Router({
  prefix: '/user'
});

router.get('/', ctx => {
  ctx.body = "I'm a user";
});

router.post('/', ctx => {
  ctx.body = {message: "I can create something"};
});

module.exports = router;
