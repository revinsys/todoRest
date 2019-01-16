import uuid from 'uuid/v4';
import { objDefineEntry } from '../utils/objDefineEntry';

export class Model {
  constructor(db) {
    this.db = db.map(item => ({
      ...item,
      id: uuid()
    }))
  }

  create(newItem) {
    const data = {
      ...newItem,
      id: uuid()
    };
    
    this.db.push(data);
    return data;
  }

  update(query, updatedData) {
    this.db = this.db.map(item => {
      return (objDefineEntry(query, item)) ? { ...item, ...updatedData } : item;
    })
    return this.find(query);
  }

  remove(query) {
    const result = this.find(query);
    this.db = this.db.filter(item => !objDefineEntry(query, item));
    return result;
  }

  find(query, sortField) {
    const result = this.db
              .filter(item => objDefineEntry(query, item))
              .sort((a, b) => {
                if (a[sortField] > b[sortField]) return 1;
                if (a[sortField] < b[sortField]) return -1;
                return 0;
              });
    
    return result;
  }
}

export default {
  Model,
}