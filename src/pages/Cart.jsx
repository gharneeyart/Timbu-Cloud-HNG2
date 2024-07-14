import React from 'react'
import '../css/Cart.css'
import Shopping from '../components/Shopping'
import Order from '../components/Order'
import Navbar from '../components/Header'
import { useCart } from "../contexts/Cart";

const Cart = () => {
  const { cart, cartSubTotal, removeFromCart } = useCart();
  return (
    <>
    <Navbar />
    <div className='cartpage'>
      
        <div className="shopping">
            <Shopping/>
        </div>
        <div className="order">
            <Order/>
        </div>
    </div></>
  )
}

export default Cart