import React from 'react'
import styles from './Generatepage.module.scss'
import Inpainting from '../features/inpainting/Inpainting'
import HeaderNav from '../features/generate/components/HeaderNav'
import ToggleBtn from '../features/ui/toggleBtn/ToggleBtn'
const Generatepage = () => {
  return (
    <div className={styles.Wrapper}>
      <nav className={styles.navBar}>
        <HeaderNav />
      </nav>
      <div className={styles.contentsWrapper}>
        <section className={styles.designTab}>
          <ToggleBtn tab1={"생성"} tab2={"편집"} />
        </section>
        <section className={styles.canvas}>
        </section>
        <section className={styles.designTab}></section>
      </div>
    </div>
  )
}

export default Generatepage
