import FilterType from './FilterType';
import Task from './Task';

export default class List {
  #all: Task[];
  #filter: FilterType;

  constructor(all: Task[], filter = FilterType.NONE) {
    this.#all = all;
    this.#filter = filter ?? FilterType.NONE;
  }

  get items() {
    return this.applyFilter(this.#all);
  }

  get quantity() {
    return this.items.length;
  }

  get filter() {
    return this.#filter;
  }

  filterActives() {
    if (!this.showingActives()) {
      return new List(this.#all, FilterType.ACTIVE);
    } else {
      return this;
    }
  }

  filterDone() {
    if (!this.showingDone()) {
      return new List(this.#all, FilterType.DONE);
    } else {
      return this;
    }
  }

  removeFilter() {
    if (!this.showingAll()) {
      return new List(this.#all);
    } else {
      return this;
    }
  }

  showingAll(): boolean {
    return this.#filter === FilterType.NONE;
  }

  showingActives(): boolean {
    return this.#filter === FilterType.ACTIVE;
  }

  showingDone(): boolean {
    return this.#filter === FilterType.DONE;
  }

  private applyFilter(tasks: Task[]): Task[] {
    if (this.showingActives()) {
      return this.applyFilterActives(tasks);
    } else if (this.showingDone()) {
      return this.applyFilterDone(tasks);
    } else {
      return [...tasks];
    }
  }

  private applyFilterActives(tasks: Task[]): Task[] {
    return tasks.filter((task) => task.active);
  }

  private applyFilterDone(tasks: Task[]): Task[] {
    return tasks.filter((task) => task.done);
  }
}
