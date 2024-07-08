import React from 'react'
import '../css/Shopping.css'
import { GoArrowLeft } from "react-icons/go";
import { cart } from '../db/ProductsDb'

const Shopping = () => {
  return (
    <div className='shop-head'>
        <div className="cart-head">
            <p>Shopping cart</p>
            <p><span>3</span> Items</p>
        </div>
        <div className="cart-details">
            <div className="">
                <p >PRODUCT DETAILS</p>
            </div>
            <div className="cart-det">
                <p>QUANTITY</p>
                <p>PRICE</p>
                <p>TOTAL</p>
            </div>
        </div>
        <div className="cards">
        {cart.map((carts) => (
            <div className="cart-card" key={carts.id}>
                <div className="cart-info">
                    <img src={carts.image} alt="" />
                    <div className="cart-p">
                        <p style={{fontSize:'20px', fontWeight:'700', margin:'0'}}>{carts.name}</p>
                        <p style={{fontSize:'20px', margin:'0'}}>{carts.color}</p>
                    </div>
                </div>
                <div className="cart-price">
                    <div className="quantities">
                        <button>-</button>
                        <span className='quant'>1</span>
                        <button>+</button>
                    </div>
                    <p>&#x24;{carts.price}.00</p>
                    <p>&#x24;{carts.price}.00</p>
                </div>
            </div>
         ))}
        </div>
        <a href='/' className="continue" style={{textDecoration:'none'}}>
            <span><GoArrowLeft size={50} style={{color:' #1640AD'}} width={100}/></span>
            <p style={{color:' #1640AD', fontSize:'20px'}}>Continue Shopping</p>
        </a>
    </div>
  )
}

export default Shopping