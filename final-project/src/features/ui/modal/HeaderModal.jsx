import React from 'react'
import styles from './HeaderModal.module.scss' 
import { useNavigate,Link } from 'react-router-dom'
import axios from '../../../axios'

const HeaderModal = ({isOpen,isClose}) => {
    const navigate = useNavigate()
    
    if(!isOpen){return null}

    const logOut = ()=>{
        sessionStorage.clear()
        axios.post('/userLogin/logout')
        isClose()
        navigate('/')
      }

  return (
        <>

    <section className={styles.headerModalBox}>
        <div className={styles.headerModalTop} >
          <button className={styles.headerModalClose}  onClick={isClose}>X</button>
        </div>
        <div className={styles.headerModalMiddle}>
            <Link to='/myconti' onClick={isClose}>마이콘티</Link>
            <Link to='/mypassword' onClick={isClose}>내정보 수정</Link>
            <button onClick={()=>logOut()}>로그아웃</button>
        </div>       
    </section>
    </>
   
  )
}

export default HeaderModal