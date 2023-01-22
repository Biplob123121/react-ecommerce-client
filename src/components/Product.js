import React from 'react'

function Product({ product }) {
    return (
        <div className="hover:shadow-lg p-2">
            <img src={product.picture} alt="" width={150} height={50}/>
            <h3 className='font-bold'>{product.name}</h3>
            <p>{product.minOrder}</p>
            <p>Tk {product.price}</p>
            <button className='mt-2 bg-gray-300 w-full text-gray-100 py-1 px-2 rounded-lg hover:font-bold hover:bg-green-500'>Add to Cart</button>
        </div>
    )
}

export default Product