// import React, { useEffect } from 'react';
// import axios from 'axios';
// import styles from './KakaoLoginButton.module.scss'


// const kakao_REST_API_KEY = 'f5810145dffc679dc95abf173323705a';
// const kakao_REDIRECT_URI = 'http://localhost:3000/login/oauth/callback/kakao';
// const kakaoLink = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakao_REST_API_KEY}&redirect_uri=${kakao_REDIRECT_URI}`;
// const url = new URL(window.location.href);
// const authorizationCode = url.searchParams.get('code');


// const KakaoLoginButton = () => {
//     const loginWithKakao = () => {
//         // 카카오 로그인 페이지로 리다이렉트합니다.
//         window.location.href = kakaoLink;
//     };
//     const getToken = async (code) => {
//         const result = await axios.post(
//             `https://kauth.kakao.com/oauth/token?grant_type='authorization_code'&client_id=${kakao_REST_API_KEY}&redirect_uri=${kakao_REDIRECT_URI}&code=${authorizationCode}`,
//             {
//                 grant_type: 'authorization_code',
//                 client_id: kakao_REST_API_KEY,
//                 redirect_uri: kakao_REDIRECT_URI,
//                 code,
//             },
//         );
//         console.log('result.data : ' + result.data);
//         return result.data.access_token;
//     };

//     const getUserInfo = async (access_token) => {
//         const result = await axios.get(
//             `https://kapi.kakao.com/v2/user/me`,
//             {
//                 headers: {
//                     Authorization: `Bearer ${access_token}`,
//                 },
//             },
//         );
//         return result.data;
//     };

//     useEffect(() => {
        
//         const url = new URL(window.location.href);
//         const authorizationCode = url.searchParams.get('code');
//         if (authorizationCode) {
//             const fetchUser = async () => {
//                 try {
//                     const token = await getToken(authorizationCode);
//                     console.log(authorizationCode)
//                     const userInfo = await getUserInfo(token);
//                     console.log(userInfo);
//                 } catch (err) {
//                     console.error(err);
//                 }  
//             };
//             fetchUser();
//         }
//     }, []);

//     return <button onClick={loginWithKakao} className={styles.button}>카카오 로그인2</button>;
// };

// export default KakaoLoginButton;