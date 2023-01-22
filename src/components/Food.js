import React from 'react';
import products from "../data/products.json";
import Product from './Product';

function Food() {
  const foods = products.filter(p => p.category === "food");
  return (
    <section>
      <h2>Food</h2>
      <div className='grid lg:grid-cols-6'>
        {
          foods.map(food =>
            <Product key={food.name}
              product={food}
            ></Product>)
        }
      </div>
    </section>
  )
}

export default Food