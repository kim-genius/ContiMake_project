import React, { useState } from 'react'
import styles from "./Nav.module.css"
import { Link } from 'react-router-dom'
import FileUpload from "../FileUpload/FileUpload";

const Nav = () => {

  let location = sessionStorage.getItem("location");
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
      <ul>
        <Link to='/mypassword'><div><img src='images/icon1.png'></img>내정보수정</div></Link>
        <Link to='/myconti'><div><img src='images/icon2.png'></img>마이콘티</div></Link>
      </ul>
      {modal && <FileUpload setModal={setModal}></FileUpload>}
    </nav >
  )
}

export default Nav