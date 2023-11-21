import React, { useRef } from 'react'
import styles from '../../ui/button/LoginButton.module.scss'

/** 소셜로그인버튼 */
const AuthButton = ({ text, provider, link, children, logo }) => {
    let color = ''
    if (provider == 'kakao') { color = '#FEE500' }
    else if (provider == 'google') { color = 'white' }


    const loginHandler = () => {
            window.location.href = link;
    };


    return (
        <button style={{ backgroundColor: color }} className={styles.button} onClick={loginHandler}>
            <img className={styles.logo} src={logo}/>
            {text}
            {children}
        </button>
    )
}

export default AuthButton