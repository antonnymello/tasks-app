import List from '../../model/List';
import ListButton from './ListButton';

interface ListFooterProps {
  tasks: List;
  changed: (tasks: List) => void;
}

const ListFooter = (props: ListFooterProps) => {
  const { tasks, changed } = props;

  const renderItemsLength = () => {
    return (
      <>
        <span className='text-gray-300 hidden lg:inline'>
          {tasks.quantity}
          {tasks.quantity === 0
            ? ' empty'
            : tasks.quantity === 1
            ? ' task'
            : ' tasks'}
        </span>
        <span className='flex-1 hidden lg:inline'></span>
      </>
    );
  };

  const renderFilterButtons = () => {
    return (
      <>
        <ListButton
          selected={tasks.showingAll()}
          onClick={() => changed(tasks.removeFilter())}
          className='hidden md:inline'
        >
          All
        </ListButton>

        <ListButton
          selected={tasks.showingActives()}
          onClick={() => changed(tasks.filterActives())}
          className='mx-4'
        >
          Actives
        </ListButton>

        <ListButton
          selected={tasks.showingDone()}
          onClick={() => changed(tasks.filterDone())}
        >
          Done
        </ListButton>
      </>
    );
  };

  const renderDeleteDoneTasksButton = () => {
    return (
      <>
        <span className='flex-grow'></span>
        <ListButton onClick={() => changed(tasks.removeDoneTasks())}>
          Delete <span className='hidden md:inline'> Done Tasks </span>
        </ListButton>
      </>
    );
  };

  return (
    <li className='flex p-5'>
      {renderItemsLength()}
      {renderFilterButtons()}
      {renderDeleteDoneTasksButton()}
    </li>
  );
};

export default ListFooter;
