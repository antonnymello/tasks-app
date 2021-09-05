import FilterType from './FilterType';
import Task from './Task';

export default class List {
  #all: Task[];
  #filter: FilterType;

  constructor(all: Task[], filter: FilterType.NONE) {
    this.#all = all;
    this.#filter = filter ?? FilterType.NONE;
  }

  get items() {
    return this.#all;
  }

  get quantity() {
    return this.items.length;
  }

  get filter() {
    return this.#filter;
  }

  showingAll(): boolean {
    return this.filter === FilterType.NONE;
  }

  showingActives(): boolean {
    return this.filter === FilterType.ACTIVE;
  }

  showingDone(): boolean {
    return this.filter === FilterType.DONE;
  }
}
