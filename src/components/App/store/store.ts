import { observable, decorate, action } from 'mobx';
import generateId from '../utils/id';

export interface TodoItem {
  id?: string;
  name: string;
  startDate: string;
  endDate?: string;
  completed?: boolean;
}

export default class Store {
  list: TodoItem[] = [];

  generateItem(name) {
    this.addItem({
      name,
      startDate: new Date().toString(),
      id: generateId(),
    });
  }

  addItem(item: TodoItem) {
    if (!item.id) {
      item.id = generateId();
    }

    this.list.push(item);

    return item;
  }
}

decorate(Store, {
  list: observable,
  addItem: action.bound,
  generateItem: action.bound,
});
