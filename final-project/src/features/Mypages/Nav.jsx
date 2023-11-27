import React, { useState, useEffect } from 'react'
import styles from "./Nav.module.css"
import { Link } from 'react-router-dom'
import FileUpload from "../FileUpload/FileUpload";

const Nav = ({ location, setLocation }) => {
  const [modal, setModal] = useState(false);


  return (
    <nav className={styles.navBox}>

      <div onClick={() => setModal(true)} className={styles.userImg} style={{
        backgroundImage: `url(${location})`,
        backgroundSize: 'cover',
      }}>

        <img className={styles.modifyBtn} src="images/Vector1.png" />
      </div>

      <h4>
        {sessionStorage.getItem('nickname')}
      </h4>
      <div className={styles.navList}>
        <div><Link to='/mypassword'><img src='images/icon1.png'></img> 내정보수정</Link></div>
        <div><Link to='/myconti'><img style={{ width: '35px' }} src='images/icon2.png'></img> 마이 콘티</Link></div>
      </div>
      {modal && <FileUpload setModal={setModal}></FileUpload>}
    </nav >
  )
}

export default Nav