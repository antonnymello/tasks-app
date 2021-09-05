import Task from '../model/task';

export default function Home() {
  let task: Task = new Task(1, 'Task example');
  task = task.changeStatus();

  return (
    <div
      className={`
      flex flex-col
      justify-center
      items-center
      text-white
      bg-gradient-to-b
      from-purple-500 
      to-purple-100
      h-screen
      `}
    >
      <span>{task.id}</span>
      <span>{task.description}</span>
      <span>{task.done ? 'Done' : 'Active'}</span>
    </div>
  );
}
