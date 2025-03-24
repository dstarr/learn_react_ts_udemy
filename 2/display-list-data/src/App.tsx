import ListComponent from "./components/ListComponent";

function App() {
  
  const items1 = ['John', 'Jane', 'Jack', 'Jill'];
  // const items2 = ['Apple', 'Banana', 'Cherry', 'Date'];

  const handleSelectItem = (item: string) => {
    console.log(`App: ${item}`);
  };

  return (
    <>
        <ListComponent items={items1} onSelectItem={handleSelectItem}>
            <h1 className="text-2xl font-bold">People names</h1>
            <p className="text-sm text-gray-500">Click on a name to select it</p>
        </ListComponent>
        {/* <ListComponent items={items2} heading="Fruit" onSelectItem={handleSelectItem} /> */}
    </>
  );
}

export default App;
