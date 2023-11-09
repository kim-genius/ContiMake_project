import React from 'react'
import Inpainting from '../features/inpainting/Inpainting'
import styles from './Editpage.module.scss'
import HeaderNav from '../features/generate/components/HeaderNav'
import ToggleBtn from '../features/ui/toggleBtn/ToggleBtn'
const Editpage = () => {
  return (
    <div className={styles.Wrapper}>
      <nav className={styles.navBar}>
       <HeaderNav/>
      </nav>
      <div className={styles.contentsWrapper}>
        <section className={styles.designTab}>
          <ToggleBtn tab1={"생성"} tab2={"편집"}/>
        </section>
        <section className={styles.canvas}>
          <Inpainting />
        </section>
        <section className={styles.designTab}></section>
      </div>
      
    </div>
  )
}

export default Editpage