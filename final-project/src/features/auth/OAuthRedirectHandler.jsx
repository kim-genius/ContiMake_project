import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from '../../axios';

import { useNavigate } from 'react-router-dom';

import ClipLoader from "react-spinners/ClipLoader";
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
    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const navigate = useNavigate()
    let [loading, setLoading] = useState(true);

    const headerHeight = '100px';
    const mainHeight = `calc(100vh - ${headerHeight}`;
    const mainStyle = {
        height: mainHeight,
    };
    // const REDIRECT_URI = provider === 'kakao' ? kakao_REDIRECT_URI : google_REDIRECT_URI;

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
            console.log('')
            // const result = await axios.post(
            //     `https://oauth2.googleapis.com/token?code=${code}&client_id=${googleClientId}&client_secret=${googleClientSecret}&redirect_uri=${googleRedirectUri}&grant_type=${grant_type}`,
            //     {
            //         code: `${code}`,
            //         client_id: `${googleClientId}`,
            //         client_secret: `${googleClientSecret}`,
            //         redirect_uri: `${googleRedirectUri}`,
            //         grant_type: `${grant_type}`,
            //     },
            // )
            // return result.data.access_token;
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
                    console.log('userInfo', userInfo);
                    let nickname = userInfo?.kakao_account?.profile?.nickname || ''
                    let email = userInfo?.kakao_account?.email || ''
                    let profileImage = userInfo?.properties?.profile_image || ''

                    setNickname(userInfo?.kakao_account?.profile?.nickname || '');
                    setEmail(userInfo?.kakao_account?.email || '');
                    setProfileImage(userInfo?.properties?.profile_image || '')

                    axios.post('/kakao/kaokologin', { // 서버에 로그인 요청을 보냅니다.
                        email: email, // 이메일 상태 값을 요청 본문에 포함시킵니다.
                        nickname: nickname,  // 닉네임 상태 값을 요청 본문에 포함시킵니다.
                        profileImage: profileImage
                    }).then((res) => {
                        if (res.data == "join") {
                            alert(`${nickname}님 ${provider} 계정으로 회원가입 완료되었습니다`);
                            sessionStorage.setItem('email', email)
                            sessionStorage.setItem('nickname', nickname)
                            sessionStorage.setItem('location', profileImage)
                            window.location.href = '/'
                        } else if (res.data == "login") {
                            alert(`${nickname}님 ${provider} 계정으로 로그인 완료되었습니다`);
                            sessionStorage.setItem('email', email)
                            sessionStorage.setItem('nickname', nickname)
                            sessionStorage.setItem('location', profileImage)
                            window.location.href = '/'
                        } else {
                            window.location.href = '/'
                        }
                    });

                } catch (err) {
                    console.error('에러??' + err);
                    setLoading(false); // 에러가 발생한 경우 로딩 상태 업데이트
                    throw err;
                }
            };

            if (authorizationCode) {
                setLoading(true); // API 호출을 시작할 때 로딩 상태를 true로 설정
                fetchUser();
            }

            console.log('안에거', email, nickname)
            axios.post('/kakao/kaokologin', { // 서버에 로그인 요청을 보냅니다.
                user_email: email, // 이메일 상태 값을 요청 본문에 포함시킵니다.
                user_nickname: nickname // 닉네임 상태 값을 요청 본문에 포함시킵니다.
            }).then(res => console.log('hihi'))

        }
    }, [authorizationCode]);

    return (
        <div style={mainStyle}>
            <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* {nickname && <div>{nickname}님 어서오세요!</div>}
                {email && <div>{email}</div>} */}
                <ClipLoader />
            </div>
        </div>
    )
}

export default OAuthRedirectHandler