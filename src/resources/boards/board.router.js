const Router = require('@koa/router');
const TaskRoutes = require('../tasks/task.router');

const { getAllBoards, getBoardById, createBoard, updateBoard, deleteBoard } = require('./board.service');

const router = new Router({
  prefix: '/boards'
});

router
  .get('/', async (ctx) => {
    ctx.body= await getAllBoards();
  })
  .get('/:id', async (ctx) => {
    const boardId = ctx.params.id;
    const result = await getBoardById(boardId);
    if (result) {
      ctx.body = result;
    } else {
      ctx.body = `Person with ID ${boardId} not found`;
      ctx.status = 404;
    }
  })
  .post('/', async (ctx) => {
    const inputData =  ctx.request.body;
    const board = await createBoard(inputData);
    ctx.status = 201;
    const { id, title, columns } = board;
    ctx.body = { id, title, columns };
  })
  .put('/:id', async (ctx) => {
    const boardId = ctx.params.id;
    const inputData =  ctx.request.body;
    const updatedBoard = await updateBoard(boardId, inputData);
    ctx.body = updatedBoard;
    ctx.status = 200;
  })
  .delete('/:id', async (ctx) => {
    const boardId = ctx.params.id;
    await deleteBoard(boardId);
    ctx.status = 204;
  });

router.use('/:id', TaskRoutes.routes(), TaskRoutes.allowedMethods());

module.exports = router;
