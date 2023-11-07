import React from 'react'
import { useDispatch } from 'react-redux'
// import { actionCreators as userActions } from '../redux/modules/user';

const OAuthRedirectHandler = (props) => {
    const dispatch = useDispatch();

    // 인가코드
    const authCode = new URL(window.location.href).searchParams.get('code')
    // console.log(authCode)

    // React.useEffect(async () => {
    //     await dispatch(userActions.kakaoLogin(authCode));
    // }, [])

    return (
        <div>로딩중</div>
    )
}

export default OAuthRedirectHandler