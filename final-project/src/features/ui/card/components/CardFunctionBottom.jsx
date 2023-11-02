import React from 'react'
import styles from '../styles/CardFunctionBottom.module.scss'

const CardFunctionBottom = () => {
  return (
    <section className={styles.cardBottom}>
    <div className={styles.cardBottomTitle}>
        <span>기능3</span>
        <h2>재생성</h2>
    </div>
    <div className={styles.cardBottomBox}> </div>
</section>
  )
}

export default CardFunctionBottom