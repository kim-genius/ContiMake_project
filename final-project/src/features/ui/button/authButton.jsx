import React from 'react'
import styles from './LoginButton.module.scss'

/** 소셜로그인버튼 */
const AuthButton = ({ text, color, link }) => {
    const loginHandler = () => {
        console.log(link)
        window.location.href = link;
    };
    return (
        <button style={{ backgroundColor: color }} className={styles.button} onClick={loginHandler}>{text}</button>
    )
}

export default AuthButton