import React from 'react';
import styles from '../styles/CardFunctionTop.module.scss';


const CardFunctionTop = () => {
  return (
    <section className={styles.cardTop}>
        <div className={styles.cardTopTitle}>
            <span>기능1</span>
            <h2>콘티생성</h2>
        </div>
        <div className={styles.cardTopBox}> </div>
    </section>
  )
}

export default CardFunctionTop

