import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart } from './Store';
import styles from './Nonveg.module.css';
function NonVeg () {
  const dispatch = useDispatch();
  const nonVegItems = useSelector((state) => state.products.NonVeg);
  
    const handleAddToCart = (item) => {
      dispatch(addToCart(item));
    };
    const cart = useSelector((state) => state.cart.items);
  console.log('Cart:', cart);
    // Log the cart items to the console for debugging
  return (
    <div className={styles.container}>
     { nonVegItems.map((item, index) => (
        <div key={item.name + index} className={styles.card}>
          {/* Displaying item details */}
          <h3>{item.name}</h3>
          <p className={styles.price}>Price: ${item.price}</p>
          <p>Description: {item.description}</p>
          <img src={`/images/${item.image}`} alt={item.name} style={{ width: '250px', height: '250px' }} /><br />
          {/* Assuming you have a button to add items to the cart */}
         <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default NonVeg;
