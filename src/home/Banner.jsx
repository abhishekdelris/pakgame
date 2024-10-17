// src/components/Banner.jsx
// import React from 'react';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import banner from '../assets/image/slider-1.png';

const Banner = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const baseURLAPI = import.meta.env.VITE_BASE_URL_API;

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
  };

  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(baseURLAPI+ 'users/get_banners')
      .then(response => response.json())
      .then(data => {
        setBanners(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching banners:', error));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    
    <>
        {/* Banner Slider Start */}
        <Slider {...settings}>
        {banners.data.map(banner => (
          <div className="item" key={banner.id}>
            <img src={banner.image} alt={banner.altText} />
          </div>
        ))}
        </Slider>
        {/* Banner Slider End */}
    </>
       
  );
};

export default Banner;
