import React from 'react'
import styles from './Generatepage.module.scss'
import Inpainting from '../features/inpainting/Inpainting'
import HeaderNav from '../features/generate/components/HeaderNav'
import ToggleBtn from '../features/ui/toggleBtn/ToggleBtn'
import CutsNumber from '../features/generate/components/CutsNumber'
import Prompts from '../features/generate/components/Prompts'
import BoxItem from '../features/ui/BoxItem/BoxItem'
import ColorButton from '../features/ui/button/ColorButton/ColorButton'
const Generatepage = () => {
  return (
    <div className={styles.Wrapper}>
      <nav className={styles.navBar}>
        <HeaderNav />
      </nav>
      <div className={styles.contentsWrapper}>
        <section className={styles.designTab}>
          <ToggleBtn tab1={"생성"} tab2={"편집"} />
          <BoxItem title={'생성할 컷 수 지정'} />
          <CutsNumber />
          <BoxItem title={'콘티 내용 입력'} />
          <div className={styles.promptsBox}>
            <Prompts />
          </div>
          <ColorButton text={'생성하기'} />
        </section>
        <section className={styles.canvas}>
        </section>
        <section className={styles.designTab}></section>
      </div>
    </div>
  )
}

export default Generatepage
