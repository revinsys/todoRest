import { Model } from './main';

class ListModel extends Model {
  constructor(params) {
    super(params);
  }

  changeAmount(listId, amount) {
    const list = this.find({ id: listId });
    this.update(list, { amount: list[0].amount + amount });
  }
}

export const listModel = new ListModel([]);