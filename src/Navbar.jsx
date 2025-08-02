import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional for styling

const Navbar = () => {
   const cart=useSelector((state) => state.cart);
    const totalitems=cart.items.reduce((total, item) => total + item.quantity, 0);
  return (
    
    <nav className="navbar">
         <div className="navbar-title">Food Fusion</div>
      <div className="navbar-links">
      <Link to="/">Home</Link>
      <Link to="/veg">Veg</Link>
      <Link to="/nonveg">NonVeg</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/cart">Order{totalitems}</Link>
      
      </div>
    </nav>
  );
};
import { useSelector } from 'react-redux';
export default Navbar;
