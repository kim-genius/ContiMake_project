import React from 'react'
import styles from './Footer.module.css'

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
              <li>우아한 문화</li>
              <li>히스토리</li>
              <li>지속가능경영</li>
            </ul>
          </div>

          <div className={styles.item}>
            <ul>
              <strong>
                <a>서비스</a>
              </strong>
              <li>배달/포장</li>
              <li>커머스</li>
              <li>사장님/라이더</li>
              <li>컬처</li>
            </ul>
          </div>

          <div className={styles.item}>
            <ul>
              <strong>
                <a>함께가치</a>
              </strong>
              <li>배민그린</li>
              <li>배민아카데미</li>
              <li>파트너 성장</li>
              <li>이웃과 함께</li>
            </ul>
          </div>

          <div className={styles.item}>
            <ul>
              <strong>
                <a>뉴스룸</a>
              </strong>
              <li>보도자료</li>
              <li>언론보도</li>
              <li>팩트 바로 알기</li>
            </ul>
          </div>

          <div className={styles.item}>
            <strong>
              <a>글꼴</a>
            </strong><br />
            <strong>
              <a>음악</a>
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
          <strong className={styles.text}>(주)우아한형제들</strong>
          <p>사업자 등록번호 : 120-87-65763 | 대표:이국환 | 주소 : 서울시 송파구 위례성대로 2 (방이동,장은빌딩)</p>
        </div>
      </div>
    </div>
  )
}

export default Footer