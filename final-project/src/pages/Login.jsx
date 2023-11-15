
import React from 'react';
import Login from '../features/auth/login/Login'
const Login = () => {
  const REST_API_KEY = 'f5810145dffc679dc95abf173323705a';
  const REDIRECT_URI = 'http://localhost:3000/login';
  const kakaoLink = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;


  return (
    <div>
      <Login></Login>
    </div>
  )
}

export default Login


//javascript key :
//439ad4f8bf75586d1f0214c5cbab80fb

//REST API key :
//f5810145dffc679dc95abf173323705a

// 카카오 developers 앱ID : 	988974