import React from 'react'
import LoginButton from '../features/ui/button/LoginButton'
import styles from './Join.module.css'
import { Link } from 'react-router-dom'

const Join = () => {
  return (
    <div className={styles.joinBackground}>
      <div className={styles.joinBox}>
        <div><img width='100px' src='images/logo.png' alt='logo' /></div>
        {/* <GoogleLoginButton /> */}
        <input className={styles.formItem} type='email' placeholder='이메일'></input>
        <input className={styles.formItem} type='password' placeholder='비밀번호'></input>
        <LoginButton className={styles.formItem} type='submit' text='로그인' />
        <div><p>이미 계정이 있으신가요?  <Link to='/login'>로그인</Link></p></div>
      </div>
    </div>

  )
}

export default Join