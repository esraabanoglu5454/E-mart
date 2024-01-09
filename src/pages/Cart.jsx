import React, { useState, useEffect } from 'react';

function Cart({ user }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    
    const storedCartItems = JSON.parse(localStorage.getItem('Cart')) ?? [];
    setCartItems(storedCartItems);
  }, []);

  const handleRemoveItem = (productId) => {
    
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('Cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="container mt-5">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map(item => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              {item.title}
              <button className="btn btn-danger" onClick={() => handleRemoveItem(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;