import { useState } from 'react';
import ListTasks from '../components/list/ListTasks';
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
      <ListTasks
        tasks={tasks}
        changed={(newTasks) => {
          setTasks(newTasks);
        }}
      />
    </div>
  );
}
