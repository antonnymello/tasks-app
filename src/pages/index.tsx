import { useState } from 'react';
import Form from '../components/forms/Form';
import ListTasks from '../components/list/ListTasks';
import Content from '../components/template/Content';
import Header from '../components/template/Header';
import initialTasks from '../data/mock';
import List from '../model/List';
import Task from '../model/Task';

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks);

  const changed = (tasks: List) => {
    setTasks(tasks);
  };

  const createdTask = (newTask: Task) => {
    setTasks(tasks.createTask(newTask));
  };

  return (
    <div className={`flex flex-col h-screen bg-gray-300`}>
      <Header>
        <Form createdTask={createdTask} />
      </Header>
      <Content>
        <ListTasks tasks={tasks} changed={changed} />
      </Content>
    </div>
  );
}
