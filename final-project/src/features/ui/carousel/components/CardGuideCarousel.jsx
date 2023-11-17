import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import FreeMode  from "swiper/modules"

// Import Swiper styles
import 'swiper/css';
import styles from '../styles/CardGuideCarousel.module.scss'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


const CardGuideCarousel = () => {
  return (
    <Swiper
    className={styles.cardGuideBox}
    spaceBetween={2}
    slidesPerView={1}
    FreeMode={true}

     >
    <SwiperSlide><img  className={styles.cardGiudeImg} src ='https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/dqCU/image/STIfcjkS_-0ws4xGiUaQCiMytRk.png'></img></SwiperSlide>
    <SwiperSlide><img  className={styles.cardGiudeImg}  src ='https://www.noblesse.com/shop/data/m/editor_new/2019/06/20/07c9bd8b5afe13ef190619_jiburi_00.jpg'></img></SwiperSlide>
    <SwiperSlide><img  className={styles.cardGiudeImg}  src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdvuU9P%2FbtqvCKUe83X%2Fl9RcG1Em9Hngp139zKhADK%2Fimg.png'></img></SwiperSlide>
  </Swiper>
  
  )
}

export default CardGuideCarousel