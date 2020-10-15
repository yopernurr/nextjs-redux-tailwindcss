import React from 'react'

const PopularProductsSection = () => {
  const products = [
    {
      image: 'https://via.placeholder.com/300x300.png',
      name: 'Product A',
      price: 14000
    },
    {
      image: 'https://via.placeholder.com/300x300.png',
      name: 'Product B',
      price: 14000
    },
    {
      image: 'https://via.placeholder.com/300x300.png',
      name: 'Product C',
      price: 14000
    },
    {
      image: 'https://via.placeholder.com/300x300.png',
      name: 'Product D',
      price: 14000
    },
  ]

  return (
    <div className="w-full p-4 flex flex-wrap">
      <span className="w-full font-medium">POPULAR PRODUCTS</span>
      <div className="w-full flex mt-0 flex-wrap">
        {
          products.map(product => (
            <div key={product.name} className="w-1/2 flex flex-wrap p-2 mt-4 hover:shadow-lg">
              <img className="w-full" src={product.image} alt=""/>
              <div className="w-full mt-2 font-medium text-sm">{product.price}</div>
              <div className="w-full text-sm">{product.name}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PopularProductsSection