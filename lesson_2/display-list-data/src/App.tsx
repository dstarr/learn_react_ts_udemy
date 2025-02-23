import ListComponent from "./components/ListComponent";

function App() {
  
  const items1 = ['John', 'Jane', 'Jack', 'Jill'];
  const items2 = ['Apple', 'Banana', 'Cherry', 'Date'];

  return (
    <>
        <ListComponent items={items1} heading="People names" />
        <ListComponent items={items2} heading="Fruit" />
    </>
  );
}

export default App;
