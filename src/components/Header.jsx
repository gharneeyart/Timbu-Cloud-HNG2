// src/Navbar.js
import React, { useState } from 'react';

import Cart from '../assets/image/Group 1 (2).png'
import '../css/Header.css';

const Navbar = () => {
  

  return (
    <nav className="navbar navbar-home">
      <div className="navbar-container">
        <a href="#" className="brand"><h1 className="logo">Timbu Cloud</h1></a>
        
        <div className='navbar-menu'>
          <a href="/" className="navbar-link">Home</a>
          <a href="/" className="navbar-link">Contact us</a>
          <a href="/" className="navbar-link">Shop</a>
          <a href="/" className="navbar-link">About</a>
        </div>
        <div className="cart">
            <a href="/cart" className="cart-btn">
              <span className="cart-icon"><img src={Cart} alt="" className='cart-img'/> <p>cart</p></span>
              <span className="cart-count">0</span>
            </a>
        </div>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon">&#9776;</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
