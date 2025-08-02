import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Veg from './Veg';
import NonVeg from './NonVeg';
import About from './About';
import Contact from './Contact';


import './App.css'; // Optional for styling
import Cart from './Cart';

const App = () => {
 
  
  // Log the cart and products to the console for debugging
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart/>} />
          {/* Add more routes as needed */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
