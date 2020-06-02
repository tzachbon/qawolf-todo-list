import { observable, decorate, action, computed } from 'mobx';
import generateId from '../utils/id';
import { getCurrentDateString } from '../utils/date';

export interface TodoItem {
  id: string;
  name: string;
  startDate: string;
  endDate?: string | null;
  completed?: boolean;
}

export default class Store {
  listMap = new Map<string, TodoItem>();

  get list() {
    return [...this.listMap.values()];
  }

  generateItem(name) {
    this.addItem({
      name,
      startDate: getCurrentDateString(),
      id: generateId(),
    });
  }

  addItem(item: TodoItem) {
    if (!item.id) {
      item.id = generateId();
    }

    this.listMap.set(item.id, item);

    return item;
  }

  toggleItemCompleted(item: TodoItem) {
    item.completed = !item.completed;
    item.endDate = item.completed ? getCurrentDateString() : null;
  }

  remove(id: string) {
    this.listMap.delete(id);
    return this.list;
  }
}

decorate(Store, {
  list: computed,
  listMap: observable,
  addItem: action.bound,
  generateItem: action.bound,
  toggleItemCompleted: action.bound,
  remove: action.bound,
});
