import { listModel } from '../models/list';

export const listController = {
  createListItem(ctx) {
    const { name } = ctx.request.body;
    const result = listModel.create({
      name,
      amount: 0,
      date: Date.now()
    });
    ctx.body = result;
  },
  removeListItem(ctx) {
    const { id } = ctx.params;
    const result = listModel.remove({ id });
    ctx.body = result;
  },
  updateListItem(ctx) {
    const { id } = ctx.params;
    const { name } = ctx.request.body;
    const result = listModel.update({ id }, { name });
    ctx.body = result;
  },
  getLists(ctx) {
    const { sort } = ctx.request.query;
    const result = listModel.find({}, sort);
    ctx.body = result;
  }
}

export default {
  listController,
}