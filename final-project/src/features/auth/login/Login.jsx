
import React, { useEffect, useState, useRef } from 'react'
import LoginButton from '../../ui/button/LoginButton'
import AuthButton from './AuthButton'
import styles from './Login.module.css'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { GoogleLogin } from "@react-oauth/google";
import axios from '../../../axios';
import { jwtDecode } from "jwt-decode";
import swal from 'sweetalert';

const Login = () => {
  const kakao_REST_API_KEY = 'f5810145dffc679dc95abf173323705a';
  const kakao_REDIRECT_URI = 'http://localhost:3000/login/oauth/callback/kakao';
  const kakaoLink = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakao_REST_API_KEY}&redirect_uri=${kakao_REDIRECT_URI}`;

  // 라우터에 /login/oauth/callback/kakao로 연결한 컴포넌트 -> \src\features\auth\OAuthRedirectHandler.jsx
  // https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=f5810145dffc679dc95abf173323705a&redirect_uri=http://localhost:3000/login/oauth/callback/kakao
  // 사용자가 카카오 로그인 인증을 완료한 뒤
  // 카카오인증서버로부터 redirect uri로 전달받은 유저의 인가코드 Authorization Code 받아오기
  // (주소창 redirect_uri 뒤의 ?code=인가코드값!)
  // redirect_uri 변경 : 개발자페이지-내애플리케이션-앱설정-플랫폼-Web-Redirect URI 등록하러 가기

  const googleIcon = '/images/googleIcon.png'
  const google_REDIRECT_URI = 'http://localhost:3000/login/oauth/callback/google';
  const googleClientId = '183693880565-u1sni2g5gpfg03fjhv5o5n37rs25homt.apps.googleusercontent.com'
  const googleApiKey = 'AIzaSyAurA1CNCeeqBv1dZLH_R48fvgM-lk0jyI'
  const googleLink = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&scope=openid%20email&client_id=${googleClientId}&redirect_uri=${google_REDIRECT_URI}`
  const [renderProps, setRenderProps] = useState()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  /**일반로그인 */
  const vaildLogin = () => {
    axios.post('/userLogin/login', { email: email, password: password })
      .then((res) => {
        if (res.data.msg == 'success') {
          sessionStorage.setItem('email', res.data.email);
          sessionStorage.setItem('nickname', res.data.nickname)
          sessionStorage.setItem('location',res.data.location)
          swal('로그인이 완료됐습니다.')
          window.location.href = '/'
          // alert('로그인이 완료됐습니다.')
        } else {
          alert('다시 확인해주세요')
        }
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }
  const test = (()=>{

  })
  return (
    <div className={styles.loginBackground}>
      <div className={styles.loginBox}>
        <div style={{ marginBottom: '10px' }}><img width='100px' src='images/logo.png' alt='logo' /></div>
        <div><AuthButton text='카카오 로그인' provider='kakao' link={kakaoLink} /></div>

        <div style={{ position: 'relative'}}>
          <AuthButton text='구글 로그인' provider='google'> </AuthButton>
            <div style={{position:'absolute',opacity:'0', transform:'translateY(-150%)',overFlow:'hidden'}}> 
            <GoogleLogin 
              width={300}
              height
              clientId={googleClientId}
              onSuccess={(res) => {
                // console.log(res)
                let token = res.credential
                // console.log(token)
                token = jwtDecode(token)
                console.log('토큰변환됨', token)
                let email = ''
                let nickname = ''
                let profileImage = ''
                email = token.email
                nickname = token.name
                profileImage = token.picture

                try {
                  axios.post('/google/googlelogin', { email: email, nickname: nickname, profileImage: profileImage }).then((res) => {
                    if (res.data == "join") {
                      alert(`${nickname}님 google 계정으로 회원가입 완료되었습니다`);
                      sessionStorage.setItem('email', email)
                      sessionStorage.setItem('nickname', nickname)
                      window.location.href = '/'
                    } else if (res.data == "login") {

                      alert(`${nickname}님 google 계정으로 로그인 완료되었습니다`);
                      sessionStorage.setItem('email', email)
                      sessionStorage.setItem('nickname', nickname)
                      window.location.href = '/'
                    } else {
                      window.location.href = '/'
                    }
                  });
                } catch (err) {
                  console.error('에러??' + err);
                  throw err;
                }
              }}
              onFailure={(res) => console.log(res, '실패')}
            />
            </div>

         </div>


        <hr style={{ width: '99%', border: 'solid 1px #E7E7E7', margin: '5px' }} />

        <input className={styles.formItem} placeholder='이메일' onChange={(e) => setEmail(e.target.value)}></input>
        <input className={styles.formItem} type='password' placeholder='비밀번호' onChange={(e) => setPassword(e.target.value)}></input>
        <LoginButton className={styles.formItem} text='로그인' func={vaildLogin}></LoginButton>
        <div><p>회원이 아니신가요?  <Link to='/join'>일반 회원가입</Link></p></div>
      </div>
    </div>
  )
}

export default Login

// 카카오 developers 앱ID : 	988974

//google
//클라이언트 ID :
//183693880565-u1sni2g5gpfg03fjhv5o5n37rs25homt.apps.googleusercontent.com
//클라이언트 보안 비밀번호
//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