import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from '../../axios';

import { useNavigate } from 'react-router-dom';
// import { actionCreators as userActions } from '../redux/modules/user';
const url = new URL(window.location.href);
const authorizationCode = url.searchParams.get('code');
const grant_type = 'authorization_code'

const kakaoApiKey = 'f5810145dffc679dc95abf173323705a';
const kakaoRedirectUri = 'http://localhost:3000/login/oauth/callback/kakao';
const kakaoLink = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakaoApiKey}&redirect_uri=${kakaoRedirectUri}`;

const googleRedirectUri = 'http://localhost:3000/login/oauth/callback/google'; // 구글 로그인 리다이렉트 URI를 설정해주세요.
const googleClientId = '183693880565-u1sni2g5gpfg03fjhv5o5n37rs25homt.apps.googleusercontent.com'
const googleApiKey = 'AIzaSyAurA1CNCeeqBv1dZLH_R48fvgM-lk0jyI'
const googleClientSecret = 'GOCSPX - NsugUDGme - UHk7fSmByTh5SipePx'
const googleLink = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&scope=openid%20email&client_id=${googleClientId}&redirect_uri=${googleRedirectUri}`

const OAuthRedirectHandler = ({ provider }) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    let [loading, setLoading] = useState(true);

    // const REDIRECT_URI = provider === 'kakao' ? kakao_REDIRECT_URI : google_REDIRECT_URI;

    const oauthConfig = {
        kakao: {
            REST_API_KEY: 'f5810145dffc679dc95abf173323705a',
            REDIRECT_URI: 'http://localhost:3000/login/oauth/callback/kakao',
            TOKEN_ENDPOINT: 'https://kauth.kakao.com/oauth/token',
            USERINFO_ENDPOINT: 'https://kapi.kakao.com/v2/user/me',
            GET_TOKEN: `https://kauth.kakao.com/oauth/token?
                        grant_type=${grant_type}&
                        client_id=${kakaoApiKey}&
                        redirect_uri=${kakaoRedirectUri}&
                        code=${authorizationCode}`,
        },
        google: {
            // Google 구성을 여기에 추가...
            ClientId: '183693880565-u1sni2g5gpfg03fjhv5o5n37rs25homt.apps.googleusercontent.com',
            REDIRECT_URI: 'http://localhost:3000/login/oauth/callback/google',
            GET_TOKEN: `https://accounts.google.com/o/oauth2/v2/auth?
                        response_type=code&
                        scope=email profile&
                        client_id=${googleClientId}&
                        redirect_uri=${googleRedirectUri}`
        },
    };

    const config = oauthConfig[provider];
    const { REST_API_KEY, REDIRECT_URI, TOKEN_ENDPOINT, USERINFO_ENDPOINT, GET_TOKEN } = config;

    //사용자가 소셜로그인을 위한 버튼을 누르면 Token 정보를 얻기 위해 애플리케이션이 브라우저를 service provide URL로 리다이렉션
    const getToken = async (code) => {
        if (provider == 'kakao') {
            const result = await axios.post(
                `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${kakaoApiKey}&redirect_uri=${kakaoRedirectUri}&code=${authorizationCode}`,
                {
                    grant_type: `${grant_type}`,
                    client_id: `${kakaoApiKey}`,
                    redirect_uri: `${kakaoRedirectUri}`,
                    code: `${code}`
                },
            );
            return result.data.access_token;
        } else if (provider == 'google') {
        const result = await axios.post(
            `https://oauth2.googleapis.com/token?code=${code}&client_id=${googleClientId}&client_secret=${googleClientSecret}&redirect_uri=${googleRedirectUri}&grant_type=${grant_type}`,
            {
                code: `${code}`,
                client_id: `${googleClientId}`,
                client_secret: `${googleClientSecret}`,
                redirect_uri: `${googleRedirectUri}`,
                grant_type: `${grant_type}`,
            },
        )
        return result.data.access_token;
        }

    };

    const getUserInfo = async (access_token) => {
        if (provider == 'kakao') {
            const result = await axios.get(
                `https://kapi.kakao.com/v2/user/me`,
                {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                },
            );
            return result.data;
        } else if (provider == 'google') {
            const result = await axios.get(
                `https://oauth2.googleapis.com/token`,
                {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                },
            );
            return result.data;
        }
    };

    useEffect(() => {

        // const url = new URL(window.location.href);
        // const authorizationCode = url.searchParams.get('code');
        if (authorizationCode) {
            // console.log(authorizationCode)
            const fetchUser = async () => {
                try {
                    const token = await getToken(authorizationCode);
                    const userInfo = await getUserInfo(token);

                    console.log('userInfo나오나', userInfo);
                    let nametest = userInfo?.kakao_account?.profile?.nickname || ''
                    let emailtest = userInfo?.kakao_account?.email || ''
                    setNickname(userInfo?.kakao_account?.profile?.nickname || '');
                    setEmail(userInfo?.kakao_account?.email || '');
                    console.log('뭐냐', nametest, emailtest)
                    axios.post('/kakao/kaokologin', { // 서버에 로그인 요청을 보냅니다.
                        email: emailtest, // 이메일 상태 값을 요청 본문에 포함시킵니다.
                        nickname: nametest  // 닉네임 상태 값을 요청 본문에 포함시킵니다.

                    }).then((res) => {
                        if (res.data == "join") {
                            alert(`${provider} 계정으로 회원가입 완료되었습니다`);
                            sessionStorage.setItem('email', emailtest)
                            sessionStorage.setItem('nickname', nametest)
                            navigate("/");
                        } else if (res.data == "login") {
                            alert(`${provider} 계정으로 로그인 완료되었습니다`);
                            sessionStorage.setItem('email', emailtest)
                            sessionStorage.setItem('nickname', nametest)
                            navigate("/");
                        } else {
                            navigate('/')
                        }
                    });

                } catch (err) {
                    console.error('에러??' + err);
                    throw err;
                }
            };

            fetchUser();
            console.log('안에거', email, nickname)
            axios.post('/kakao/kaokologin', { // 서버에 로그인 요청을 보냅니다.
                user_email: email, // 이메일 상태 값을 요청 본문에 포함시킵니다.
                user_nickname: nickname // 닉네임 상태 값을 요청 본문에 포함시킵니다.
            }).then(res => console.log('hihi'))

        }
    }, []);

    return (
        <div style={{ height: '100vh' }}>
            <div>
                {nickname && <div>{nickname}님 어서오세요!</div>}
                {email && <div>{email}</div>}
                {/* <ClipLoader /> */}
            </div>
        </div>
    )
}

export default OAuthRedirectHandler