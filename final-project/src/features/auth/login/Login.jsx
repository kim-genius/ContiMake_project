
import React from 'react'
import LoginButton from '../../ui/button/LoginButton'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'

const Login = () => {
  const REST_API_KEY = 'f5810145dffc679dc95abf173323705a';
  const REDIRECT_URI = 'http://localhost:3000/login/oauth/callback/kakao'; 
  // 라우터에 /login/oauth/callback/kakao로 연결한 컴포넌트 -> C:\Users\gjaischool2\Desktop\실전역량프로젝트\contiStoryPrompt\final-project\src\features\auth\OAuthRedirectHandler.jsx
  const kakaoLink = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
  
  // 사용자가 카카오 로그인 인증을 완료한 뒤
  // 카카오인증서버로부터 redirect uri로 전달받은 유저의 인가코드 Authorization Code 받아오기
  // (주소창 redirect_uri 뒤의 ?code=인가코드값!)
  // redirect_uri 변경 : 개발자페이지-내애플리케이션-앱설정-플랫폼-Web-Redirect URI 등록하러 가기
  // https://data-jj.tistory.com/53 참고****
  // const authCode = new URL(window.location.href).searchParams.get('code')
  // console.log(authCode)

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