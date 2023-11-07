import React from 'react'
import styles from "./Nav.module.css"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className={styles.navBox}>

      <div className={styles.user}>
        <div className={styles.userImg}></div>
        <h4 claStylessName={styles.userList}>
          hansol
        </h4>
      </div>
      <Link to='/mypassword'><div className={styles.myInfo}><img src='images/icon1.png'></img>내정보수정</div></Link>
      <Link to='/myconti'><div className={styles.contiBox}><img src='images/icon2.png'></img>마이콘티</div></Link>
    </nav >
  )
}

export default Nav