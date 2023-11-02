import React from 'react'
import styles from '../styles/CardGuide.module.css'
import Button from '../../button/Button'
import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// import required modules

import 'swiper/css/pagination';


const Cardguide = () => {
  return (
    <section className={styles.cardGuide}>
      <article className={styles.cardGuideBox}>
        <div className={styles.cardGuideBoxLeft}>
          <h1>생성형 AI로 만드는 자동 콘티</h1>
          <p>인물과 스토리만 입력하면 인공지능이 스토리보드 이미지를 만들어줍니다</p>
          <Link to='/generate'>{Button('콘티 생성하기')}</Link>
        </div>
        <div className={styles.cardGuideBoxRight}>

        </div>

      </article>
    </section>
  )
}

export default Cardguide