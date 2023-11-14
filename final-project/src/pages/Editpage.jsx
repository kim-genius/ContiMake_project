import React,{ useState } from 'react'
import Inpainting from '../features/inpainting/Inpainting'
import styles from './Editpage.module.scss'
import HeaderNav from '../features/generate/components/HeaderNav'
import ToggleBtn from '../features/ui/toggleBtn/ToggleBtn'
import BoxItem from '../features/ui/BoxItem/BoxItem'
import PromptBox from '../features/inpainting/components/PromptBox'
import ColorButton from '../features/ui/button/ColorButton/ColorButton'
import OutputImgs from '../features/inpainting/components/OutputImgs'
import { useDispatch,useSelector } from 'react-redux'
import { setBrushState } from '../store/canvasSlice'

const Editpage = () => {
  const dispatch = useDispatch();    
  const brushState = useSelector((state) => state.canvas_slice)
  return (
    <div className={styles.Wrapper}>
      <nav className={styles.navBar}>
        <HeaderNav />
      </nav>
      <div className={styles.contentsWrapper}>
        <div>
          <ToggleBtn tab1={"생성"} tab2={"편집"} />
          <section className={styles.designTab}>
            <BoxItem title={'프롬프트'} />
            <PromptBox />
            <BoxItem title={'인페인팅'} />
            <p>설명</p>
            <button className={styles.ToolBtn} onClick={()=> {dispatch(setBrushState('all'));
          console.log(brushState)}}>
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
        </div>
        <section className={styles.canvas}>
          <Inpainting />
        </section>
        <section className={styles.designTab}>
          <OutputImgs />
        </section>
      </div>

    </div >
  )
}

export default Editpage