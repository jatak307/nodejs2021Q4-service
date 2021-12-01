const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const UserRoutes = require('./resources/users/user.router');
 
const app = new Koa();
app.use(bodyParser());
 
// app.use(async ctx => {
//   ctx.body = ctx.request.body;
// });

app.use(UserRoutes.routes())
  .use(UserRoutes.allowedMethods());

module.exports = app;