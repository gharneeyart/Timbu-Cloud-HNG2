import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/ProductDetails.css';
import Navbar from '../components/Header';
import { useCart } from "../contexts/Cart";

const ProductDetail = () => {
  const { productid } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState('');
  const { addToCart } = useCart();

  const Appid = import.meta.env.VITE_REACT_APP_APPID;
  const Apikey = import.meta.env.VITE_REACT_APP_APIKEY;
  const organId = import.meta.env.VITE_REACT_APP_ORGANIZATIONID;

  const handleAddToCart = (event) => {
    event.stopPropagation();
    addToCart(product);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const apiUrl = `/api/products/${productid}?organization_id=${organId}&Appid=${Appid}&Apikey=${Apikey}`;
        const response = await axios.get(apiUrl);
        setProduct(response.data);
        setLoading(false);
        if (response.data.photos && response.data.photos.length > 0) {
          setSelectedImage(response.data.photos[0].url);
        }
      } catch (err) {
        console.error('Error fetching product:', err);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productid]);

  if (loading) return <p className='loading'>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  const handleThumbnailClick = (url) => {
    setSelectedImage(url);
  };

  return (
    <>
      <Navbar />
      <div className="product-detail">
        <div className="prod-img">
          <div className="main-img">
            <img
              src={selectedImage ? `/api/images/${selectedImage}` : 'placeholder-image-url'}
              alt={product.name}
              className='product-image'
              style={{ objectFit: 'contain', width: '100%', height: '100%', border:'0' }}
            />
          </div>
          <div className="thumbnails">
            {product.photos.map((photo, index) => (
              <div className="select" key={index}>
                <img
                  src={`/api/images/${photo.url}`}
                  alt={product.name}
                  className={`thumbnail ${selectedImage === photo.url ? 'selected' : ''}`}
                  onClick={() => handleThumbnailClick(photo.url)}
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="prod-det">
          <h2 className='product-name'>{product.name}</h2>
          <p className='product-description'>{product.description}</p>
          <p className='product-price'>&#x24;{product.current_price}.00</p>
          <div className="btn">
            <button className='addtocarts' onClick={handleAddToCart}>Add to Cart</button>
            <button className='buynow'>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
