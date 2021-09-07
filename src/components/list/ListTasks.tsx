import List from '../../model/List';
import ListButton from './ListButton';
import Item from './Item';

interface TaskListProps {
  tasks: List;
  changed: (tasks: List) => void;
}

const TaskList = (props: TaskListProps) => {
  const { tasks } = props;

  const renderTasks = () => {
    return tasks.items.map((task) => {
      return (
        <Item
          key={task.id}
          value={task.description}
          done={task.done}
          changeStatus={() => {
            const modifiedTask = task.changeStatus();
            const newList = tasks.updateTask(modifiedTask);
            props.changed(newList);
          }}
        />
      );
    });
  };

  return (
    <div
      className={`
    flex w-3/5
    `}
    >
      <ul
        className={`
      w-full
      list-none
      bg-white shadow-lg rounded-lg
      `}
      >
        {renderTasks()}
        <li className='p-5'>
          <ListButton selected={true} onClick={() => {}}>
            All
          </ListButton>
        </li>
      </ul>
    </div>
  );
};

export default TaskList;
