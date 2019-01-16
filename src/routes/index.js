import KoaRouter from 'koa-router';
import { listController } from '../controllers/listController';
import { todoController } from '../controllers/todoController';

const router = new KoaRouter({ prefix: '/list' });

router
  .get('/', listController.getLists)
  .post('/', listController.createListItem)
  .put('/:id', listController.updateListItem)
  .del('/:id', listController.removeListItem)
  .get('/:listId', todoController.getTodoList)
  .post('/:listId', todoController.createTodo)
  .del('/todo/:id', todoController.removeTodo);

export default router.routes();