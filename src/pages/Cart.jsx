import React from 'react'
import '../css/Cart.css'
import Shopping from '../components/Shopping'
import Order from '../components/Order'
import Navbar from '../components/Header'
import { useCart } from "../contexts/Cart";
import { FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
  const { cart, cartSubTotal, removeFromCart } = useCart();
  return (
    <>
    <Navbar />
    {/* <div className="cartpage"> */}
      {/* <h2>Shopping Cart</h2> */}
      {cart.length === 0 ? (
        <div className="empty-cart">
          <FaShoppingCart size={50} />
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div className='cartpage'>
      <div className="shopping">
            <Shopping/>
        </div>
        <div className="order">
            <Order/>
        </div>
        
    </div>
        
      )}
    {/* </div> */}
    </>
  )
}

export default Cart