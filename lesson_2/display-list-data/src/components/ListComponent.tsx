import { useState } from 'react';

interface ListComponentProps {
  items: string[];
  heading: string;
}

const ListComponent = ({heading, items}: ListComponentProps) => {
  

  const [selectedItem, setSelectedItem] = useState(0);

    function handleClick(item: string) {
        console.log(item);
    }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">{heading}</h1>
        <ul className="w-1/2 border border-gray-200 rounded-lg divide-y divide-gray-300 overflow-hidden">
          {items.map((item, i) => (
            <li
              className={
                selectedItem === i
                  ? 'py-2 px-3 bg-gray-800 text-white'
                  : 'py-2 px-3'
              }
              key={i}
              onClick={
                () => {
                    setSelectedItem(i);
                    handleClick(item);
                }
              }
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
