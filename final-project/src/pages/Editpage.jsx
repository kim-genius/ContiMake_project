import React from 'react'
import Inpainting from '../features/inpainting/Inpainting'
import styles from './Editpage.module.scss'
import HeaderNav from '../features/generate/components/HeaderNav'
import ToggleBtn from '../features/ui/toggleBtn/ToggleBtn'
import BoxItem from '../features/ui/BoxItem/BoxItem'
import PromptBox from '../features/inpainting/components/PromptBox'
import ColorButton from '../features/ui/button/ColorButton/ColorButton'
const Editpage = () => {
  return (
    <div className={styles.Wrapper}>
      <nav className={styles.navBar}>
        <HeaderNav />
      </nav>
      <div className={styles.contentsWrapper}>
        <section className={styles.designTab}>
          <ToggleBtn tab1={"생성"} tab2={"편집"} />
          <BoxItem title={'프롬프트'} />
          <PromptBox />
          <BoxItem title={'인페인팅'} />
          <p>설명</p>
          <button className={styles.ToolBtn}>
            <img src='/images/pencil_icon.svg'></img>
          </button>
          <BoxItem title={'텍스트'} />
          <div className={styles.textBtnBox}>
            <button>
              <img src='/images/bubble_icon.svg'></img>
            </button>
            <button>
              <img src='/images/effect_bubble_icon.svg'></img>
            </button>
            <button>
              <img src='/images/text_icon.svg'></img>
            </button>
          </div>
          <ColorButton text={"재생성"} />

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