
import React from 'react'
import LoginButton from '../../src/features/ui/button/LoginButton'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'

const Login = () => {
  const REST_API_KEY = 'f5810145dffc679dc95abf173323705a';
  const REDIRECT_URI = 'http://localhost:3000/login';
  const kakaoLink = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;


  return (
    <div className={styles.loginBackground}>
      <div className={styles.loginBox}>
        <div style={{marginBottom:'10px'}}><img width='100px' src='images/logo.png' alt='logo' /></div>
        <div><LoginButton text='카카오톡 로그인' color='kakao' link={kakaoLink} /></div>
        <div><LoginButton text='구글 로그인' color='google' /></div>
        <hr style={{ width: '99%', border: 'solid 1px #E7E7E7', margin: '5px' }} />
        <input className={styles.formItem} type='email' placeholder='이메일'></input>
        <input className={styles.formItem} type='password' placeholder='비밀번호'></input>
        <LoginButton className={styles.formItem} type='submit' text='로그인' />
        <div><p>회원이 아니신가요?  <Link to='/join'>일반 회원가입</Link></p></div>
      </div>
    </div>
  )
}

export default Login


//javascript key :
//439ad4f8bf75586d1f0214c5cbab80fb

//REST API key :
//f5810145dffc679dc95abf173323705a

// 카카오 developers 앱ID : 	988974