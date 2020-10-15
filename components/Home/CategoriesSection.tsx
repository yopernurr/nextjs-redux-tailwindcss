import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'

const CategoriesSection = () => {

  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 2000);
  }, []);

  const categories = [
    {
      image: 'https://via.placeholder.com/300x300.png',
      label: 'Camera'
    },
    {
      image: 'https://via.placeholder.com/300x300.png',
      label: 'Phones & Tablets'
    },
    {
      image: 'https://via.placeholder.com/300x300.png',
      label: 'Laptops & Computers'
    },
    {
      image: 'https://via.placeholder.com/300x300.png',
      label: 'Musical Instruments'
    },
  ]

  return (
    <div className="w-full p-4 flex flex-wrap">
      <span className="w-full font-medium">SHOP BY CATEGORIES</span>
      <div className="w-full flex mt-4">
        {
          !loading
          ?
            categories.map(category => (
              <div key={category.label} className="w-full flex flex-wrap px-2 justify-center">
                <img alt="" src={category.image} className="h-12 w-12" />
                <div className="w-full text-center mt-2">
                  <div className="">{category.label}</div>
                </div>
              </div>
            ))
          :
          <>
            {
              [0,1,2,3].map(v => (
                <div key={v} className="w-full flex px-2 justify-center">
                  <Skeleton circle={true} width={75} height={75}/>
                </div>
              ))
            }
          </>
        }
        
      </div>
    </div>
  )
}

export default CategoriesSection