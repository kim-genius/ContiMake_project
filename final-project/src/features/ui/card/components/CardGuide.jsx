import React,{useState} from 'react';

import styles from '../styles/CardGuide.module.scss';
import Button from '../../button/Button';
import { Link } from 'react-router-dom';
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';


const Cardguide = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <section className={styles.cardGuide}>
        <article className={styles.cardGuideBox}>
            <div className={styles.cardGuideBoxLeft}>
                <h1>생성형 AI로 만드는 자동 콘티</h1>
                <p>인물과 스토리만 입력하면 인공지능이 스토리보드 이미지를 만들어줍니다</p>
                <Link to='/generate'>{Button('콘티 생성하기')}</Link>
            </div>
            <div className={styles.cardGuideBoxRight}>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>

            </div>
            
        </article>
    </section>
  )
}

export default Cardguide