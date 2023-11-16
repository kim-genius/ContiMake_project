import React, { useState } from 'react'
import {useSelector} from "react-redux";
import styles from './Generatepage.module.scss'
import HeaderNav from '../features/generate/components/HeaderNav'
import ToggleBtn from '../features/ui/toggleBtn/ToggleBtn'
import CutsNumber from '../features/generate/components/CutsNumber'
import Prompts from '../features/generate/components/Prompts'
import BoxItem from '../features/ui/BoxItem/BoxItem'
import axios from 'axios'
import ColorButton from '../features/ui/button/ColorButton/ColorButton';
import OutputImgs from '../features/inpainting/components/OutputImgs';
import BarLoader from 'react-spinners/BarLoader'

const Generatepage = () => {
const [image, updateImage] = useState([])
const [loading, setLoading] = useState();
const promptsList = useSelector((state) => state.cur_project.prompts);
const pormptsNum = useSelector((state) => state.cur_project.imgNums);

  const generate = async ({ prompt, promptLen }) => {
    updateImage([])
    setLoading(true)
    for (let i = 0; i < promptLen; i++) {
      const result = await axios.get(
        `http://154.20.254.95:50095/?prompt==${prompt[i]},%20pencil%20sketch,%20cartoon%20storyboard,%20fast%20sketch,%20gray%20color`
      );
      image.push(result.data);
      updateImage([...image]);
    }
    setLoading(false)
  };

  return (
    <div className={styles.Wrapper}>
      <nav className={styles.navBar}>
        <HeaderNav />
      </nav>
      <div className={styles.contentsWrapper}>
        <section className={styles.designTab}>
          <ToggleBtn tab1={"생성"} tab2={"편집"} />
          <BoxItem title={"생성할 컷 수 지정"} />
          <CutsNumber />
          <BoxItem title={"콘티 내용 입력"} />
          <div className={styles.promptsBox}>
            <Prompts />
          </div>
          <ColorButton text={"생성하기"} func={generate} parameter={{ prompt: promptsList, promptLen: pormptsNum }}/>
        </section>
        <section className={styles.canvas}>
          {loading ?
          <div className={styles.loading_bar}>
            <BarLoader color="#36d7b7" loading={loading} width={200} height={20}/>
          </div>
          : image ?
            image.map((img, idx) => {
              return (
                <img
                  key={`img-${idx}`}
                  className={styles.images}
                  src={`data:image/png;base64,${img}`}
                  alt="표시"
                />
              );
            })
          : null
          }
        </section>
        <section className={styles.designTab}>
          <OutputImgs/>
        </section>
      </div>
    </div>
  );
}

export default Generatepage
