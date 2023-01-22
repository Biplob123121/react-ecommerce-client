import React from 'react';
import products from "../data/products.json";
import Product from './Product';

function Fashion() {
  const fashions = products.filter(p => p.category === "fashion");
  return (
    <section>
        <h2>Fashion</h2>
        <div>
        {
          fashions.map(fashion =>
            <Product key={fashion.name}
              product={fashion}
            ></Product>)
        }
      </div>
    </section>
  )
}

export default Fashion