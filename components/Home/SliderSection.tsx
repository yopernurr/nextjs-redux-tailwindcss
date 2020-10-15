import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import DataSource from '../../datasource';
import Skeleton from 'react-loading-skeleton';

interface props {
  api: DataSource
}

const SliderSection = (props: props) => {

  const [banner, setbanner] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    getBanners()
  }, []);

  const getBanners = async () => {
    setloading(true)
    try {
      const promise = await props.api.getBanners()
      const res = await promise.json()
      setbanner(res.data)
    } catch (err) {
      console.log(err)
    }
    setTimeout(() => {
      setloading(false)
    }, 2000);
  }

  return (
    <div className="w-full">
      {
        loading
        ? 
          <Skeleton height={300}/>
        :
        <Carousel onChange={() => {}} onClickItem={() => {}} onClickThumb={() => {}} swipeable={true} showThumbs={false}>
          {
            banner.map(v => (
              <div key={v.id}>
                <img src={v.image_url} alt="" className="w-full"/>
              </div>
            ))
          }
        </Carousel>
      }
    </div>
  )
}

export default SliderSection