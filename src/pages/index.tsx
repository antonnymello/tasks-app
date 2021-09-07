import { useState } from 'react';
import TaskList from '../components/list/TaskList';
import initialTasks from '../data/mock';

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div
      className={`
      flex flex-col
      justify-center
      items-center
      h-screen
      bg-gray-300
      `}
    >
      <TaskList
        tasks={tasks}
        changed={(newTasks) => {
          setTasks(newTasks);
        }}
      />
    </div>
  );
}
