import { useState } from 'react';

const ListComponent = () => {
  const people = ['John', 'Jane', 'Jack', 'Jill'];

  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">People</h1>
        <ul className="w-1/2 border border-gray-200 rounded-lg divide-y divide-gray-300 overflow-hidden">
          {people.map((person, i) => (
            <li
              className={
                selectedItem === i
                  ? 'py-2 px-3 bg-gray-800 text-white'
                  : 'py-2 px-3'
              }
              key={i}
              onClick={() => setSelectedItem(i)}
            >
              {person}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListComponent;
