import React, {useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';

const PopularProductsSection = () => {

  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 2000);
  }, []);

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
          !loading
          ?
            products.map(product => (
              <div key={product.name} className="w-1/2 flex flex-wrap p-2 mt-4 hover:shadow-lg">
                <img className="w-full" src={product.image} alt=""/>
                <div className="w-full mt-2 font-medium text-sm">{product.price}</div>
                <div className="w-full text-sm">{product.name}</div>
              </div>
            ))
          :
            [1,2,3,4].map(v => (
              <div key={v} className="w-1/2 flex flex-wrap p-2 mt-4">
                <Skeleton width={320} height={320} className="text-center"/>
                <Skeleton width={100} height={10} />
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default PopularProductsSection