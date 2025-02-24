import { ReactNode, useState } from 'react';

interface ListComponentProps {
  items: string[];
  children: ReactNode;
  onSelectItem: (item: string) => void;
}

const ListComponent = ({children, items, onSelectItem}: ListComponentProps) => {

  const [selectedItem, setSelectedItem] = useState(0);
  
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {children}
        <ul className="w-1/2 border border-gray-200 rounded-lg divide-y divide-gray-300 overflow-hidden">
          {items.map((item, i) => (
            <li
              className={
                selectedItem === i
                  ? 'py-2 px-3 bg-gray-800 text-white'
                  : 'py-2 px-3'
              }
              key={i}
              onClick={() => {
                setSelectedItem(i);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListComponent;
