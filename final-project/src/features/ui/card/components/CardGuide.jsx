import React from 'react'
import styles from '../styles/CardGuide.module.scss'
import Button from '../../button/Button'
import { Link } from 'react-router-dom'


import 'swiper/css/pagination';


const Cardguide = () => {
  return (
    <section className={styles.cardGuide}>
        <article className={styles.cardGuideBox}>
            <div className={styles.cardGuideBoxLeft}>
                <h2>생성형 AI로 만드는 자동 콘티</h2>
                <p>인물과 스토리만 입력하면 인공지능이 
                  <br></br>
                스토리보드 이미지를 만들어줍니다</p>
                <Link to='/generate'>{Button('새 콘티 생성')}</Link>
            </div>
            <div className={styles.cardGuideBoxRight}>
                   
            </div>

        </article>
    </section>
  )
}

export default Cardguide