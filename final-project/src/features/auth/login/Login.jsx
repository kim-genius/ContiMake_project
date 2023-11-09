
import React, { useEffect,useState } from 'react'
import LoginButton from '../../ui/button/LoginButton'
import AuthButton from './AuthButton'
import styles from './Login.module.css'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from '../../../axios';
import KakaoLoginButton from './KakaoLoginButton'


const Login = () => {
  const googleIcon = '/images/googleIcon.png'
  const kakao_REST_API_KEY = 'f5810145dffc679dc95abf173323705a';
  const kakao_REDIRECT_URI = 'http://localhost:3000/login/oauth/callback/kakao';
  const kakaoLink = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakao_REST_API_KEY}&redirect_uri=${kakao_REDIRECT_URI}`;

  // 라우터에 /login/oauth/callback/kakao로 연결한 컴포넌트 -> \src\features\auth\OAuthRedirectHandler.jsx
  //https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=f5810145dffc679dc95abf173323705a&redirect_uri=http://localhost:3000/login/oauth/callback/kakao

  const google_REDIRECT_URI = 'http://localhost:3000/login/oauth/callback/google';
  const googleClientId = '183693880565-u1sni2g5gpfg03fjhv5o5n37rs25homt.apps.googleusercontent.com'

  // 사용자가 카카오 로그인 인증을 완료한 뒤
  // 카카오인증서버로부터 redirect uri로 전달받은 유저의 인가코드 Authorization Code 받아오기
  // (주소창 redirect_uri 뒤의 ?code=인가코드값!)
  // redirect_uri 변경 : 개발자페이지-내애플리케이션-앱설정-플랫폼-Web-Redirect URI 등록하러 가기
  // const authCode = new URL(window.location.href).searchParams.get('code')
  // console.log(authCode)

  // google
  // https://www.npmjs.com/package/react-google-login 참고.

  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
   const vaildLogin=()=>{
    axios.post('/userLogin/login',{email:email,password:password})
    .then((res)=>{
      if(res.data.msg =='success'){
        sessionStorage.setItem('email',res.data.email);
        sessionStorage.setItem('nickname',res.data.nickname)
        alert('로그인이 완료됐습니다.')
        navigate('/')
        
      }
    })
  }

  return (
    <div className={styles.loginBackground}>
      <div className={styles.loginBox}>
        <div style={{ marginBottom: '10px' }}><img width='100px' src='images/logo.png' alt='logo' /></div>
        <div><AuthButton text='카카오 로그인' color='kakao' link={kakaoLink} /></div>
        {/* <div><KakaoLoginButton/></div> */}
        <div><AuthButton text='구글 로그인' color='google' /></div>

        <GoogleOAuthProvider>
          <GoogleLogin
            clientId={googleClientId}
            onSuccess={(res) => console.log(res, '성공')}
            onFailure={(res) => console.log(res, '실패')}
            render={(renderProps) => (
              <div className='social_login_box google' onClick={renderProps.onClick}>
                <div className='social_login_image_box'>
                  <img src={googleIcon} alt='google_login' />
                </div>
                <div className='social_login_text_box'>구글로 시작하기</div>
                <div className='social_login_blank_box'> </div>
              </div>
            )}
          />
        </GoogleOAuthProvider>

        <hr style={{ width: '99%', border: 'solid 1px #E7E7E7', margin: '5px' }} />
        
        <input className={styles.formItem}  placeholder='이메일' onChange={(e)=>setEmail(e.target.value)}></input>
        <input className={styles.formItem} type='password' placeholder='비밀번호' onChange={(e)=>setPassword(e.target.value)}></input>
        <LoginButton className={styles.formItem} text='로그인'func={vaildLogin}></LoginButton>
        <div><p>회원이 아니신가요?  <Link to='/join'>일반 회원가입</Link></p></div>
      </div>
    </div>
  )
}

export default Login

// 카카오 developers 앱ID : 	988974

//google
//클라이언트 ID :
//183693880565-d1psaaev70fi65uign72jt80laqhnjaq.apps.googleusercontent.com

//클라이언트 보안 비밀번호
//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