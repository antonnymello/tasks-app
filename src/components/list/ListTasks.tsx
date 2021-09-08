import List from '../../model/List';
import Item from './Item';
import ListFooter from './ListFooter';

interface ListTasksProps {
  tasks: List;
  changed: (tasks: List) => void;
}

const ListTasks = (props: ListTasksProps) => {
  const renderTasks = () => {
    return props.tasks.items.map((task) => {
      return (
        <Item
          key={task.id}
          value={task.description}
          done={task.done}
          changeStatus={() => {
            const modifiedTask = task.changeStatus();
            const newList = props.tasks.updateTask(modifiedTask);
            props.changed(newList);
          }}
        />
      );
    });
  };

  return (
    <div
      className={`
    flex w-3/5 items-start relative
    `}
    >
      <ul
        className={`
      absolute -top-14
      w-full
      list-none
      bg-white shadow-lg rounded-lg
      `}
      >
        {renderTasks()}
        <ListFooter tasks={props.tasks} changed={props.changed} />
      </ul>
    </div>
  );
};

export default ListTasks;
