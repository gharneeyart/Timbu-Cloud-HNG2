import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import '../css/Product.css';

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const Appid = import.meta.env.VITE_REACT_APP_APPID;
  const Apikey = import.meta.env.VITE_REACT_APP_APIKEY;
  const organId = import.meta.env.VITE_REACT_APP_ORGANIZATIONID;
  const size = 12

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const apiUrl = `/api/products?organization_id=${organId}&page=1&size=${size}&Appid=${Appid}&Apikey=${Apikey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log('Full API Response:', data);
        setProducts(data.items || []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching products:', err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Calculate the number of pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Get the products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='products'>
      <div className="product-title">
        <h3 className=''>OUR PRODUCTS</h3>
      </div>
      <div className="product-list">
        {loading ? (
          <div className="loading" >
            <p>Loading...</p>
          </div>
        ) : (
          Array.isArray(currentProducts) && currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products available</p>
          )
        )}
      </div>
      <div className="pagination">
        {[...Array(totalPages).keys()].map(number => (
          <button
            key={number + 1}
            onClick={() => paginate(number + 1)}
            className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}
          >
            {number + 1}
          </button>
        ))}
      </div>
      {/* {selectedProduct && (
        <ProductDetailsModal product={selectedProduct} onClose={handleCloseModal} />
      )} */}
    </div>
  );
};

export default Product;
