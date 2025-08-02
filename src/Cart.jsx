import React from 'react';
import { useSelector } from 'react-redux';
import './Cart.css'; // Optional for styling
function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="cart-page">
      <h2>Your Orders</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="cart-items-container">
          {cartItems.map((item, index) => (
            <div key={item.name + index} className="cart-item-card">
              <img
                src={`/images/${item.image}`}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
