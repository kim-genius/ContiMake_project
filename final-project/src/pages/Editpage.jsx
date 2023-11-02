import React from 'react'
import Inpainting from '../features/inpainting/Inpainting'
import styles from './Editpage.module.scss'
const Editpage = () => {
  return (
    <div className={styles.Wrapper}>
      <nav className={styles.navBar}>
        <span>제목없음</span>
        <button>EditIcon</button>
        <button>마이콘티 저장버튼</button>
        <button>내보내기 버튼</button>
      </nav>

      <div className={styles.contentsWrapper}>
        <section className={styles.designTab}></section>
        <section className={styles.canvas}>
          <Inpainting />
        </section>
        <section className={styles.designTab}></section>
      </div>
      
    </div>
  )
}

export default Editpage