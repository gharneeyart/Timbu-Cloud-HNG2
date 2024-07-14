import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useCart } from '../contexts/Cart'; // Ensure correct path
import '../css/ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  // const { productid } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  // const navigate = useNavigate();

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };
  // VITE_REACT_APP_API_URL = https://api.timbu.cloud/products?organization_id=05d391b1349b4ae2b68f668f0c2aa257&reverse_sort=false&page=1&size=10&Appid=Q9HDDRKG802F8NS&Apikey=2c09daf4bf454f6dbd6d50d2cc3b3f3a20240712161213556784
  // VITE_REACT_APP_APPID = Q9HDDRKG802F8NS
  // VITE_REACT_APP_APIKEY = 2c09daf4bf454f6dbd6d50d2cc3b3f3a20240712161213556784
  // VITE_REACT_APP_ORGANIZATIONID = 05d391b1349b4ae2b68f668f0c2aa257
  const handleAddToCart = (event) => {
    event.stopPropagation();
    addToCart(product, quantity);
  };

  // const handleViewDetails = () => {
  //   navigate(`/product/${product.id}`);
  // };

  const imageUrl = product.photos && product.photos[0] && product.photos[0].url ? `/api/images/${product.photos[0].url}` : 'placeholder-image-url';

  return (
    <div className='card' key={product.id} >
      <Link to={`/product/${product.id}`}>
      <img src={imageUrl} alt={product.name} className='shoe' />
      </Link>
      <p className='name'>{product.name}</p>
      <div className="detail">
        <span className='price'>&#x24;{product.current_price[0].NGN[0]}.00</span>
        <div className="quantity">
          <div className="quantity-container">
            <select
              id="quantity"
              className="quantity-dropdown"
              value={quantity}
              onChange={handleQuantityChange}
            >
              {[1, 2, 3, 4, 5].map((qty) => (
                <option key={qty} value={qty}>{qty}</option>
              ))}
            </select>
          </div>
          <button className='addtocart' onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
