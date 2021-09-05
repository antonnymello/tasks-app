import initialTasks from '../data/mock';

export default function Home() {
  let tasks = initialTasks;

  const renderTasks = () => {
    return tasks.items.map((task) => {
      return (
        <div key={task.id}>
          <span>{task.id}</span>
          <span>{task.description}</span>
          <span>{task.done ? 'Done' : 'Active'}</span>
        </div>
      );
    });
  };

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
      {renderTasks()}
    </div>
  );
}
