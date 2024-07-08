import React from 'react'
import Product from '../components/Product'
import Hero from '../components/Hero'
import Cart from '../assets/image/Group 1.png'
import '../css/Home.css'

const Home = () => {
  return (
    <div className='home'>
      <nav className="navbar-home">
      <div className="navbar-container">
        <a href="/" className="brand"><h1 className="logos">Timbu Cloud</h1></a>
        
        <div className='navbar-menu'>
          <a href="/" className="navbar-links">Home</a>
          <a href="/" className="navbar-links">Contact us</a>
          <a href="/" className="navbar-links">Shop</a>
          <a href="/" className="navbar-links">About</a>
        </div>
        <div className="carter">
            <a href="/cart" className="cart-btn">
              <span className="carter-icon"><img src={Cart} alt="" className='cart-img'/> <p>cart</p></span>
              <span className="cart-count">0</span>
            </a>
        </div>
        <button className="navbar-toggle">
          <span className="navbar-toggler-icon">&#9776;</span>
        </button>
      </div>
    </nav>
        <Hero/>
        <Product/>
    </div>
  )
}

export default Home