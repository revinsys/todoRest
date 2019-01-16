import { todoModel } from '../models/todo';
import { listModel } from '../models/list';

export const todoController = {
  createTodo(ctx) {
    const { listId } = ctx.params;
    const { todo, position } = ctx.request.body;
    const result = todoModel.create({
      todo,
      listId,
      position,
      date: Date.now()
    });
    listModel.changeAmount(listId, 1);
    ctx.body = result;
  },
  removeTodo(ctx) {
    const { id } = ctx.params;
    const result = todoModel.remove({ id });
    listModel.changeAmount(result[0].listId, -1);
    ctx.body = result;
  },
  getTodoList(ctx) {
    const { listId } = ctx.params;
    const { sort } = ctx.request.query;
    const result = todoModel.find({ listId }, sort);
    ctx.body = result;
  }
};

export default {
  todoController,
}