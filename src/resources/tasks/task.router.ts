import Router from '@koa/router';
import { Context, DefaultContext, DefaultState } from 'koa';
import { verifyToken } from '../../common/auth';
import { logger } from '../../logging/log';

import { getAllTasks, getTaskById, createTask, updateTask, deleteTask } from './task.service';

const TaskRoutes: Router<DefaultState, DefaultContext> = new Router({
  prefix: '/tasks'
});

TaskRoutes
  .get('/', verifyToken, async (ctx: Context) => {
    ctx.body= await getAllTasks();
    logger.http(`GET. Url: ${ctx.url}. 
    Response status - ${ctx.status}. 
    Params: ${JSON.stringify(ctx.params)}.
    Body: ${JSON.stringify(ctx.body)}`);
  })
  .get('/:id', verifyToken, async (ctx: Context) => {
    const taskId = ctx.params.id;
    const result = await getTaskById(taskId);
    ctx.body = result;
    logger.http(`GET. Url: ${ctx.url}. 
      Response status - ${ctx.status}. 
      Params: ${JSON.stringify(ctx.params)}. 
      Body: ${JSON.stringify(ctx.body)}`
    );
  })
  .post('/', verifyToken, async (ctx: Context) => {
    const inputData =  ctx.request.body;
    const task = await createTask(inputData);
    const boardId = ctx.params.id;
    ctx.status = 201;
    ctx.body = { ...task, boardId };
    logger.http(`POST. Url: ${ctx.url}. 
      Response status - ${ctx.status}. 
      Params: ${JSON.stringify(ctx.params)}. 
      Body: ${JSON.stringify(ctx.body)}`);
  })
  .put('/:id', verifyToken, async (ctx: Context) => {
    const taskdId = ctx.params.id;
    const inputData =  ctx.request.body;
    const updatedTask = await updateTask(taskdId, inputData);
    ctx.body = updatedTask;
    ctx.status = 200;
    logger.http(`PUT. Url: ${ctx.url}. 
      Response status - ${ctx.status}. 
      Params: ${JSON.stringify(ctx.params)}. 
      Body: ${JSON.stringify(ctx.body)}`);
  })
  .delete('/:id', verifyToken, async (ctx: Context) => {
    const taskdId = ctx.params.id;
    await deleteTask(taskdId);
    ctx.status = 204;
    logger.http(`DELETE. Url: ${ctx.url}. 
      Response status - ${ctx.status}. 
      Params: ${JSON.stringify(ctx.params)}.`);
  });

export { TaskRoutes };
