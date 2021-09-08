import FilterType from '../model/FilterType';
import List from '../model/List';
import Task from '../model/Task';

const initialTasks: Task[] = [
  // Task.createActive(1, 'Study Next.js'),
  // Task.createDone(2, 'Clean car'),
  // Task.createActive(3, 'Buy monthly book'),
];

export default new List(initialTasks, FilterType.NONE);
