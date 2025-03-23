
const ShoppingCart = () => {

    let cartItems = 0;

    function handleAddItemClick(): void {
        cartItems++;
    }

    return (
        <>
            <div>Cart Items: {cartItems}</div>
            <button onClick={handleAddItemClick}>Add Item</button>
        </>
    )
}

export default ShoppingCart;