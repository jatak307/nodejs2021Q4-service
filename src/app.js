const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const { errorHundler } = require('./common/error');
const UserRoutes = require('./resources/users/user.router');
 
const app = new Koa();
app.use(bodyParser());

app.use(errorHundler);

app.use(UserRoutes.routes())
  .use(UserRoutes.allowedMethods());

module.exports = app;