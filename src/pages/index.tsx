import Item from '../components/list/Item';

export default function Home() {
  return (
    <div
      className={`
      flex flex-col
      justify-center
      items-center
      text-white
      bg-gradient-to-b
      from-gray-600
      to-gray-900
      h-screen
      `}
    >
      <ul>
        <Item value='Example #01' done={false} changeStatus={() => {}} />
        <Item value='Example #02' done={true} changeStatus={() => {}} />
      </ul>
    </div>
  );
}
