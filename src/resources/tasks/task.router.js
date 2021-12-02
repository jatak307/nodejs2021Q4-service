const Router = require('@koa/router');

const { getAllTasks, getTaskById, createTask } = require('./task.service');

const router = new Router({
  prefix: '/tasks'
});

router
  .get('/', async (ctx) => {
    ctx.body= await getAllTasks();
  })
  .get('/:id', async (ctx) => {
    const taskId = ctx.params.id;
    const result = await getTaskById(taskId);
    if (result) {
      ctx.body = result;
    } else {
      ctx.body = `Task with ID ${taskId} not found`;
      ctx.status = 404;
    }
  })
  .post('/', async (ctx) => {
    const inputData =  ctx.request.body;
    const task = await createTask(inputData);
    ctx.status = 201;
    const { id, title, columns } = task;
    ctx.body = { id, title, columns };
  });

module.exports = router;
