import React from 'react'
import "../css/ProductCard.css"
import Shoe from '../assets/image/Rectangle 13.png'

const ProductCard = ({product}) => {
  return (
   
        <div className='card'>  
            <img src={product.image} alt="" className='shoe'/>
            <p className='name'>{product.name}</p>
            <div className="detail">
                <span className='price'> &#x24;{product.price}.00</span>
                <div className="quantity">
                    <div className="quantity-container">
                    <select id="quantity" className="quantity-dropdown">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </div>
                    <button className='addtocart'>Add to Cart</button>
                </div>
            </div>
        </div>
        
       
    
    
  )
}

export default ProductCard