import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div >
        <nav>
          <div className={styles.item}>
            <ul>
              <strong>
                <a>회사소개</a>
              </strong>
              <li>콘스프</li>
            </ul>
          </div>

          <div className={styles.item}>
            <ul>
              <strong>
                <a>서비스</a>
              </strong>
              <li>콘티</li>
              <li>스토리</li>
              <li>프롬프트</li>
            </ul>
          </div>

          <div className={styles.item}>
            <ul>
              <strong>
                <a>부가기능</a>
                <li>편집</li>
                <li>재생성</li>
                <li>말풍선</li>
              </strong>
            </ul>
          </div>

          <div className={styles.item}>
            <ul>
              <strong>
                <a>뉴스룸</a>
              </strong>
              <li>콘티스토리</li>
              <li>언론보도</li>
            </ul>
          </div>

          <div className={styles.item}>
            <strong>
              <a></a>
            </strong><br />
            <strong>
              <a></a>
            </strong>
          </div>

          <div className={styles.item}>
            <ul>
              <li>오시는길</li>
              <li>공지사항</li>
              <li><strong>개인정보처리방침</strong></li>
              <li>제휴문의</li>
              <li>소비자중심경영</li>
              <li>제보센터</li>
            </ul>
          </div>
        </nav>
        <div className={styles.bottom}>
          <strong className={styles.text}>(주)콘스프</strong>
          <p>사업자 등록번호 : 120-87-61465 | 대표:김영재 | 주소 : 광주광역시 동구 제봉로 92</p>
        </div>
      </div>
    </div>
  )
}

export default Footer