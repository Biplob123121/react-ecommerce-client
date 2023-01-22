import React from 'react';
import products from "../data/products.json";
import Product from './Product';

function AllProduct() {
  return (
    <section>
        <h2>All Products</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8'>
        {
          products.map(product =>
            <Product key={product.name}
              product={product}
            ></Product>)
        }
      </div>
    </section>
  )
}

export default AllProduct