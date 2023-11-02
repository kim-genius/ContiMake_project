import React from 'react'
import LoginButton from '../../../ui/button/LoginButton'
import styles from '../styles/Joinbox.module.scss'
import { Link } from 'react-router-dom';
const Joinbox = () => {
    console.log(user)

  return (
    <section className={styles.joinBackground}>
    <div className={styles.joinBox}>
      <div><img width='100px' src='images/logo.png' alt='logo' /></div>
      {/* <GoogleLoginButton /> */}
      <div className={styles.joinEmail}>
      <input className={styles.formItem} type='email' placeholder='이메일'></input>
      <button>확인</button>
      </div>
      <input className={styles.formItem} type='password' placeholder='비밀번호'></input>
      <input className={styles.formItem} type='password' placeholder='비밀번호 확인'></input>
      <input className={styles.formItem} type='password' placeholder='닉네임'></input>
      <LoginButton className={styles.formItem} type='submit' text='회원가입'/>
      <div><p>이미 계정이 있으신가요?  <Link to='/login'>로그인</Link></p></div>
    </div>
</section>
  )
}

export default Joinbox