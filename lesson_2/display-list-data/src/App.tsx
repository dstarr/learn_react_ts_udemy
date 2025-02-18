import { MouseEvent } from "react";

function App() {

  const people = ["John", "Jane", "Jack", "Jill"];
  
  const handleClick = (dudeName: string) => {
    console.log(dudeName);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">People</h1>
        <ul>
          {people.map((dude, i) => (
            <li 
              className="py-2" 
              key={i} 
              onClick={() => handleClick(dude)}>{dude}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
