import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// import required modules

import 'swiper/css/pagination';
import styles from './Banner.css';


const Banner = () => {
  return (
    <>

      <Swiper pagination={true} modules={[Pagination]} className='mySwiper'>
        <SwiperSlide style={{backgroundImage:`url('https://i.namu.wiki/i/-Sph76nYhl0abbQn0KyrucN_7ZbXJHIRM9Q0I9bHr1BD_4k-SRdKTNSLt_zfsnjeo8x5ezQeqlVH5SIMG-yp9A.webp')`}}></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  )
}

export default Banner