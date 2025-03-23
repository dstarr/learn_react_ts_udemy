import { useState } from "react";

function App() {

  const [grocery, setGrocery] = useState({
    item: "Apple",
    quantity: 10
  });

  function handleAddItem(): void {
    setGrocery({
      ...grocery,
      quantity: grocery.quantity + 1
    });
  }

  return (
    <>
      <div>
        <span> Quantity: {grocery.quantity}</span>
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </>
  );
}

export default App;