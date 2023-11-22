import React,{useState} from 'react'
import styles from '../styles/CardFunctionMiddle.module.scss'
import CardFunctionAnimation from "./CardFunctionAnimation";


const CardFunctionMiddle = () => {
  const [animationAvctive,setAnimationActive] =useState(false)
  CardFunctionAnimation(1400,setAnimationActive)
  return (
    <section className={`${styles.cardMiddle} ${animationAvctive ? styles.cardAnimation:null}`}>
    <div className={styles.cardMiddleTitle}>
       <h2>Inpainting</h2>
        <span>기능2</span>
        
    </div>
    <div className={styles.cardMiddleBox} style={{backgroundImage:'url(https://cdn.itdaily.kr/news/photo/202305/214222_217811_4911.jpg)'}}> </div>
</section>
  )
}

export default CardFunctionMiddle