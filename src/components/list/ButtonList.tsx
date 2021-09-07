interface ButtonListProps {
  selected?: boolean;
  className?: boolean;
  children: any;
  onClick: (event: any) => void;
}

const ButtonList = (props: ButtonListProps) => {
  const selectedBorder = props.selected ? 'border-b-4 border-purple-400' : '';
  return (
    <button
      onClick={props.onClick}
      className={`
      text-gray-500 font-semibold hover:text-black
      focus:outline-none ${selectedBorder}
      
  ${props.className}  
  `}
    >
      {props.children}
    </button>
  );
};

export default ButtonList;
