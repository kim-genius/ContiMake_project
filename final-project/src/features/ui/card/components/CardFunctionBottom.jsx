import React,{useState} from 'react'
import styles from '../styles/CardFunctionBottom.module.scss'
import CardFunctionAnimation from "./CardFunctionAnimation";


const CardFunctionBottom = () => {
 const [animationAvctive,setAnimationActive] =useState(false)

  CardFunctionAnimation(1600,setAnimationActive)


  return (
    <section className={`${styles.cardBottom} ${animationAvctive ? styles.cardAnimation:null}`}>
    <div className={styles.cardBottomTitle}>
        <span>기능3</span>
        <h2>재생성</h2>
    </div>
    <div className={styles.cardBottomBox} style={{backgroundImage:'url(https://miro.medium.com/v2/resize:fit:720/format:webp/1*S9FFO6-3Hy9LtmW_297NJg.png)'}}> </div>
</section>
  )
}

export default CardFunctionBottom