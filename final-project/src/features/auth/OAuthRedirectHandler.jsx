import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from '../../axios';
import { ClipLoader } from "react-spinners/BarLoader";
// import { actionCreators as userActions } from '../redux/modules/user';

const kakao_REST_API_KEY = 'f5810145dffc679dc95abf173323705a';
const kakao_REDIRECT_URI = 'http://localhost:3000/login/oauth/callback/kakao';
const kakaoLink = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakao_REST_API_KEY}&redirect_uri=${kakao_REDIRECT_URI}`;
const url = new URL(window.location.href);
const authorizationCode = url.searchParams.get('code');
const grant_type = 'authorization_code'

const OAuthRedirectHandler = (props) => {
    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    let [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    // React.useEffect(async () => {
    //     await dispatch(userActions.kakaoLogin(authCode));
    // }, [])
    const getToken = async (code) => {
        const result = await axios.post(
            `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${kakao_REST_API_KEY}&redirect_uri=${kakao_REDIRECT_URI}&code=${authorizationCode}`,
            {
                grant_type: 'authorization_code',
                client_id: `${kakao_REST_API_KEY}`,
                redirect_uri: `${kakao_REDIRECT_URI}`,
                code: `${code}`
            },
        );

        return result.data.access_token;
    };

    const getUserInfo = async (access_token) => {
        const result = await axios.get(
            `https://kapi.kakao.com/v2/user/me`,
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            },
        );
        return result.data;
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

                    console.log(userInfo);
                    setNickname(userInfo?.kakao_account?.profile?.nickname || '');
                    setEmail(userInfo?.kakao_account?.email || '');
                    console.log('안에거', email, nickname)
                    const response = await axios.post('/kakao/kaokologin', { // 서버에 로그인 요청을 보냅니다.
                        user_email: email, // 이메일 상태 값을 요청 본문에 포함시킵니다.
                        user_nickname: nickname // 닉네임 상태 값을 요청 본문에 포함시킵니다.
                    });
                    console.log(response.data);
                } catch (err) {
                    console.error('에러??' + err);
                }
            };
            fetchUser();
        }
    }, [email, nickname]);





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