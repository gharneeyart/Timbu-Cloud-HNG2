import React from 'react'
import ProductCard from './ProductCard'
import { products } from '../db/ProductsDb'
import '../css/Product.css'

const Product = () => {
  return (
    <div className='products'>
      <div className="product-title">
        <h3 className=''>OUR PRODUCTS</h3>
      </div>
         <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Product