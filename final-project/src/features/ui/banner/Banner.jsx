
import React, { useRef, useState } from 'react';

import { register } from 'swiper/element/bundle';
import styles from './Banner.css';
import BannerCarousel from '../carousel/components/BannerCarousel';


const Banner = () => {
  return (
    <>
      <BannerCarousel></BannerCarousel>
    </>
  )
}

export default Banner