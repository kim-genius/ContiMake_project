import React, { useState, useEffect } from 'react'
import styles from "./Nav.module.css"
import { Link } from 'react-router-dom'
import FileUpload from "../FileUpload/FileUpload";

const Nav = () => {
  const [modal, setModal] = useState(false);
  const [click, setClick] = useState(true);
  const [location, setLocation] = useState(sessionStorage.getItem('location'));

  useEffect(() => {
    setLocation(sessionStorage.getItem('location'))
  }, [setLocation])

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

        <div>
          <Link to='/mypassword'>
            <img src={'images/icon1.png'} alt="myInfo icon" /> 내정보수정
          </Link>
        </div>

        <div>
          <Link to='/myconti'>
            <img style={{ width: '35px' }} src={'images/icon2.png'} alt="myConti icon" /> 마이 콘티
          </Link>
        </div>

      </div >

      {modal && <FileUpload setModal={setModal} location={location} setLocation={setLocation}></FileUpload>}

    </nav >
  )
}

export default Nav