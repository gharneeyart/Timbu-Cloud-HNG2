import React from 'react'
import '../css/Shopping.css'
import { GoArrowLeft } from "react-icons/go";
// import { cart } from '../db/ProductsDb'
import { useCart } from "../contexts/Cart";
import { MdClear } from "react-icons/md";



const Shopping = () => {
    const { cart, cartSubTotal, removeFromCart, incrementQuantity, decrementQuantity, clearCart} = useCart();
    
  return (
    <div className='shop-head'>
        <div className="cart-head">
            <p>Shopping cart</p>
            <p><span>{cart.length > 0 ? cart.length : 0}</span> Items</p>
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
        {cart.map((carts) => {
            const imageUrl = carts.photos && carts.photos[0] && carts.photos[0].url ? `/api/images/${carts.photos[0].url}` : 'placeholder-image-url'; // replace 'placeholder-image-url' with a valid placeholder image URL
           return(
            <div className="cart-card" key={carts.id}>
            <div className="cart-info">
                <img src={imageUrl} alt="" style={{width:'142px', height:'101px'}}/>
                <div className="cart-p">
                    <p style={{fontSize:'20px', fontWeight:'700', margin:'0'}}>{carts.name}</p>
                    <p style={{fontSize:'20px', margin:'0'}}>{carts.color}</p>
                </div>
            </div>
            <div className="cart-price">
                <div className="quantities">
                    <button  onClick={() => decrementQuantity(carts.id)}>-</button>
                    <span className='quant'>{carts.quantity}</span>
                    <button onClick={() => incrementQuantity(carts.id)}>+</button>
                </div>
                <p>&#x24;{carts.current_price[0].NGN[0]}.00</p>
                <p>&#x24;{carts.current_price[0].NGN[0]*carts.quantity}.00</p>
                <button onClick={() => removeFromCart(carts.id)} style={{background:'none', border:'0'}}>
                    <MdClear size={30} />
                </button>
            </div>
            
        </div>
           )
            
            
})}
        </div>
        <button className='remove' onClick={clearCart}>Remove all</button>
        
        
        <a href='/' className="continue" style={{textDecoration:'none'}}>
            <span><GoArrowLeft size={50} style={{color:' #1640AD'}} width={100}/></span>
            <p style={{color:' #1640AD', fontSize:'20px'}}>Continue Shopping</p>
        </a>
    </div>
  )
}

export default Shopping