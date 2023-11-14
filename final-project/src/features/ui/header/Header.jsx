
import React,{useRef, useState,useEffect} from 'react'
import styles from './Header.module.scss'
import Button from '../button/Button'
import { Link, useNavigate } from 'react-router-dom'

import HeaderModal from '../modal/HeaderModal'
const Header = () => {
    const headerRef = useRef()
    const [isModalOpen,setIsModalOpen] = useState(false)
    const [position, setPosition] = useState(0);
    const [nickName,setNickName] = useState(sessionStorage.getItem('nickname'))
    const exitModal = ()=>{
      setIsModalOpen(false)
  }
    const openModal = ()=>{
       setIsModalOpen(true)
     }

function onScroll() {
  setPosition(window.scrollY);
}
     useEffect(() => {
      const hidden = "transform:translateY(-100%);transition-duration:0.5s"
      const appear = "transform:translateY(0%);transition-duration:0.5s"
      window.addEventListener("scroll", onScroll);
      if(position > 500){
         headerRef.current.style=hidden
      }else if(position<500){
        headerRef.current.style=appear
      }
    }, [position]);  
    


    return (
    <header className={styles.header} ref = {headerRef}>
      <div className={styles.headerBox}>
        <Link to='/'><img className={styles.logo} src='images/logo.png' alt='logo' /></Link>
        <div className={styles.headerRight}>
          <Link to='/generate'>{Button('새 콘티 생성')}</Link>
         {
         sessionStorage.getItem('nickname') ?    
         <div className={styles.profileBox}   onClick={openModal}>
            <img className={styles.profile} src='/images/profile.png'></img>
             <p>{sessionStorage.getItem('nickname')}님</p>
         </div>
         :
         <Link to='/login'><span className={styles.loginBtn}>로그인</span></Link>
         }
          <HeaderModal isOpen={isModalOpen} isClose={exitModal}></HeaderModal>
        </div>
      </div>
    </header>

  )
}

export default Header