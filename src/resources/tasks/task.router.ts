import Router from '@koa/router';

import { getAllTasks, getTaskById, createTask, updateTask, deleteTask } from './task.service';

const TaskRoutes = new Router({
  prefix: '/tasks'
});

TaskRoutes
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
    const boardId = ctx.params.id;
    ctx.status = 201;
    ctx.body = { ...task, boardId };
  })
  .put('/:id', async (ctx) => {
    const taskdId = ctx.params.id;
    const inputData =  ctx.request.body;
    const updatedTask = await updateTask(taskdId, inputData);
    ctx.body = updatedTask;
    ctx.status = 200;
  })
  .delete('/:id', async (ctx) => {
    const taskdId = ctx.params.id;
    await deleteTask(taskdId);
    ctx.status = 204;
  });

export { TaskRoutes };
