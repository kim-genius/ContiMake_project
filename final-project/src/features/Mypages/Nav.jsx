import React from 'react'
import styles from "./Nav.module.css"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className={styles.navBox}>

      <div className={styles.userImg}></div>
      <h4>
        {sessionStorage.getItem('nickname')}
      </h4>
      <ul>
        <Link to='/mypassword'><div><img src='images/icon1.png'></img>내정보수정</div></Link>
        <Link to='/myconti'><div><img src='images/icon2.png'></img>마이콘티</div></Link>
      </ul>
    </nav >
  )
}

export default Nav