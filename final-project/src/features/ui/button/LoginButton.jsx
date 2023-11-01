import React from 'react'
import styles from './LoginButton.module.scss'

const LoginButton = ({ text, color, link }) => {
    const loginHandler = () => {
        console.log(link)
        window.location.href = link;
    };
    return (
        <button style={{ backgroundColor: color }} className={styles.button} onClick={loginHandler}>{text}</button>
    )
}

export default LoginButton