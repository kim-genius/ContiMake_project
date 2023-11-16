import React, { useRef } from 'react'
import styles from '../../ui/button/LoginButton.module.scss'

/** 소셜로그인버튼 */
const AuthButton = ({ text, provider, link, children, onClick }) => {
    let color = ''
    if (provider == 'kakao') { color = '#FEE500' }
    else if (provider == 'google') { color = 'white' }

    const buttonRef = useRef(null);

    const loginHandler = () => {
        if (provider == 'google') {
            console.log('google login 시도중..')
            
        }
        else {
            console.log(link)
            window.location.href = link;
        }
    };


    return (
        <button style={{ backgroundColor: color }} className={styles.button} onClick={loginHandler}>
            {text}
            {children}
        </button>
    )
}

export default AuthButton