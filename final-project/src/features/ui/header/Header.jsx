
import React,{useState} from 'react'
import styles from './Header.module.scss'
import Button from '../button/Button'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { setSession } from '../../../store/session'
import HeaderModal from '../modal/HeaderModal'
const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let sessionData = useSelector(state=>state.session)
    
    const [isModalOpen,setIsModalOpen] = useState(false)
    
    dispatch(setSession({nickname:sessionStorage.getItem('nickname'),email:sessionStorage.getItem('email')}))
  
    const exitModal = ()=>{
      setIsModalOpen(false)
  }
    const openModal = ()=>{
       setIsModalOpen(true)
     }



    return (
    <header className={styles.header}>
      <div className={styles.headerBox}>
        <Link to='/'><img className={styles.logo} src='images/logo.png' alt='logo' /></Link>
        <div className={styles.headerRight}>
          <Link to='/generate'>{Button('새 콘티 생성')}</Link>
         {
         sessionStorage.getItem('nickname') ?  
         
         <div className={styles.profileBox}   onClick={openModal}>
            <img className={styles.profile} src='/images/profile.png'></img>
             <p>{sessionData.nickName}님</p>
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