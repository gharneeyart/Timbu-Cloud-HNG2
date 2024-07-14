import React from 'react'
import '../css/Order.css'
import { useCart } from "../contexts/Cart";

const Order = () => {
  const { cart, cartSubTotal, removeFromCart } = useCart();
  return (
    <div className='orders'>
        <div className="order-head">
           <p>Order Summary</p>
        </div>
        <div className="order-price">
            <p>ITEMS <span>{cart.length > 0 ? cart.length : 0}</span></p>
            <p>${cartSubTotal()}.00</p>
        </div>
        <div className="shipping">
           <p>SHIPPING</p>
            <select name="" id="" className='ship'>
            <option value="standard" className='option'>Standard Delivery - $5.00</option>
            {/* <option value="express" className='option'>Express Delivery - $10.00</option>
            <option value="overnight" className='option'>Overnight Delivery - $20.00</option> */}
            </select>
        </div>
        <div className="shipping">
           <p>PROMO CODE</p>
           <input type="text" placeholder='Enter your code' className='promo'/>
        </div>
        <button className='apply'>APPLY</button>
        <div className="order-total">
            <p>TOTAL COST</p>
            <p>${cartSubTotal()+5.00}.00</p>
        </div>
        <a href='/checkout' style={{textDecoration:'none'}} className="order-btn">
          <button className='check'>CHECKOUT</button>
        </a>
    </div>
  )
}

export default Order