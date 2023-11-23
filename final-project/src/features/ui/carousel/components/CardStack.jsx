import React from 'react'
import { Stack } from 'react-bootstrap';
import styles from '../styles/CardStack.module.scss'


let imgBox1Path = [
  'https://teenstudio.app/data/board/post/833122155.jpg',
  'https://image.aladin.co.kr/product/32791/23/cover500/k382936590_2.jpg',
  'https://ridicorp.com/wp-content/uploads/2021/07/Manta-IP_20210708-940x623.png',
  'https://img.hankyung.com/photo/201910/c8e283f42ec64988f649ad4a17528d5f.jpg',
  'https://www.sisajournal.com/news/photo/202103/213395_121132_4747.jpg',
  'https://cdn.gametoc.co.kr/news/photo/202304/72487_225072_563.png',
  'https://dimg.donga.com/wps/NEWS/IMAGE/2015/09/18/73705737.3.jpg',
  'https://mir-s3-cdn-cf.behance.net/project_modules/fs/ccd6db18078417.562c379a5c089.jpg'
]
let imgBox2Path=[
  'https://www.sisajournal.com/news/photo/202103/213395_121132_4747.jpg',
  'https://cdn.gametoc.co.kr/news/photo/202304/72487_225072_563.png',
  'https://image.edaily.co.kr/images/Photo/files/NP/S/2022/09/PS22091700052.jpg',
  'https://cdn.class101.net/images/c1bc2333-ff74-424b-ad24-0ae06957e6e3'
]

const CardStack = () => {
  return (
    <section className={styles.cardboxmain}>
          <div className={styles.cardboxtitle}>
            <h2>빛나는 아이디어에 더해진 커뮤니케이션</h2>
            <p>나만의 상상이 아닌 함께하는 상상이 되도록</p>
          </div>
        <div className={styles.cardbox}>
        <Stack direction="horizontal" gap={3}>
          
            <div className={`${styles.cardboxcontent} ${styles.box1}`} style={{backgroundImage:`url(${imgBox1Path[0]})`}}></div>
            <div className={styles.cardboxcontent} style={{backgroundImage:`url(${imgBox1Path[1]})`}}></div>
            <div className={`${styles.cardboxcontent} ${styles.box1}`} style={{backgroundImage:`url(${imgBox1Path[2]})`}}></div>
            <div className={styles.cardboxcontent} style={{backgroundImage:`url(${imgBox1Path[3]})`}}></div>
            <div className={`${styles.cardboxcontent} ${styles.box1}`} style={{backgroundImage:`url(${imgBox1Path[4]})`}}></div>
            <div className={styles.cardboxcontent} style={{backgroundImage:`url(${imgBox1Path[5]})`}}></div>
            <div className={`${styles.cardboxcontent} ${styles.box1}`} style={{backgroundImage:`url(${imgBox1Path[6]})`}}></div>
            <div className={styles.cardboxcontent} style={{backgroundImage:`url(${imgBox1Path[7]})`}}></div>
        </Stack>
        </div>
        <div className={styles.cardbox2}>
        <Stack direction="horizontal" gap={3}>
          <div className={`${styles.cardboxcontent} ${styles.box1}`} style={{backgroundImage:`url(${imgBox1Path[0]})`}}></div>
            <div className={styles.cardboxcontent} style={{backgroundImage:`url(${imgBox1Path[1]})`}}></div>
            <div className={`${styles.cardboxcontent} ${styles.box1}`} style={{backgroundImage:`url(${imgBox1Path[2]})`}}></div>
            <div className={styles.cardboxcontent} style={{backgroundImage:`url(${imgBox1Path[3]})`}}></div>
            <div className={`${styles.cardboxcontent} ${styles.box1}`} style={{backgroundImage:`url(${imgBox1Path[4]})`}}></div>
            <div className={styles.cardboxcontent} style={{backgroundImage:`url(${imgBox1Path[5]})`}}></div>
            <div className={`${styles.cardboxcontent} ${styles.box1}`} style={{backgroundImage:`url(${imgBox1Path[6]})`}}></div>
            <div className={styles.cardboxcontent} style={{backgroundImage:`url(${imgBox1Path[7]})`}}></div>
        </Stack>
        </div>
            
            
    </section>
  )
}

export default CardStack
