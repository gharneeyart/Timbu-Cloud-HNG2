import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "../css/Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = localStorage.getItem('currentPage');
    return savedPage ? parseInt(savedPage, 10) : 1;
  });
  const [totalPages, setTotalPages] = useState(1);

  const Appid = import.meta.env.VITE_REACT_APP_APPID;
  const Apikey = import.meta.env.VITE_REACT_APP_APIKEY;
  const organId = import.meta.env.VITE_REACT_APP_ORGANIZATIONID;
  const size = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/products?organization_id=${organId}&size=${size}&page=${currentPage}&Appid=${Appid}&Apikey=${Apikey}`,
          {
            mode: "cors",
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data.items);
        setTotalPages(Math.ceil(data.total / size));
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [Appid, Apikey, organId, currentPage]);

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return <p>Error loading products: {error.message}</p>;
  }

  return (
    <div className="products">
      <div className="product-title">
        <h3 className="">OUR PRODUCTS</h3>
      </div>
      <div className="product-list">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Product;
