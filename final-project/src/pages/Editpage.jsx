import React, { useState, useRef } from 'react'
import Inpainting from '../features/inpainting/Inpainting'
import styles from './Editpage.module.scss'
import HeaderNav from '../features/generate/components/HeaderNav'
import ToggleBtn from '../features/ui/toggleBtn/ToggleBtn'
import BoxItem from '../features/ui/BoxItem/BoxItem'
import PromptBox from '../features/inpainting/components/PromptBox'
import ColorButton from '../features/ui/button/ColorButton/ColorButton'
import OutputImgs from '../features/inpainting/components/OutputImgs'
import { useDispatch, useSelector } from 'react-redux'
import { setBrushState } from '../store/canvasSlice'
import { BedrockRuntime } from 'aws-sdk'
import InpaintingTutorial from "../features/tutorial/EditTutorial"

const Editpage = () => {
  const dispatch = useDispatch();
  const brushState = useSelector((state) => state.canvas_slice)
  const [gray, setGray] = useState(['#fff', '#fff','#fff','#fff']);
  const btnRef = useRef([]);
  
  const activeBtn = (idx) => {
    console.log('clicked!!!')
    if (gray[idx] == '#fff') {
      let copy = [...gray];
      copy[idx] = '#A4A4A4';
      setGray(copy)
    } else {
      let copy = [...gray];
      copy[idx] = '#fff';
      setGray(copy)
    }
    console.log(gray)
  }
  
  return (
    <div className={styles.Wrapper}>
      <InpaintingTutorial/>
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
            <button 
              className={styles.toolBtn} 
              ref={el => btnRef.current[0] = el}
              style={{backgroundColor:gray[0]}}
              onClick={() => {
                dispatch(setBrushState('all'));
                activeBtn(0)
              }}>
              <img src={'/images/Pencil.svg'} value='tool' ></img>
            </button>
            <BoxItem title={'텍스트'} />
            <div className={styles.textBtnBox}>
              <button
                className={styles.toolBtn}
                style={{backgroundColor:gray[1]}}
                ref={el => btnRef.current[1] = el}
                onClick={()=> activeBtn(1)}
                
                >
                <img src={'/images/bubble.svg'} ></img>
              </button>
              <button 
                className={styles.toolBtn} 
                style={{backgroundColor:gray[2]}}
                ref={el => btnRef.current[2] = el}
                onClick={()=> activeBtn(2)}
                >
                <img src={'/images/Effect_bubble.svg'} ></img>
              </button>
              <button
                className={styles.toolBtn}
                style={{backgroundColor:gray[3]}}
                ref={el => btnRef.current[3] = el}
                onClick={()=> activeBtn(3)}
                >
                <img src={'/images/text.svg'} ></img>
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