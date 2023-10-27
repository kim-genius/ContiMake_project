import React from 'react'
import styles from './LoginButton.module.css'

const LoginButton = (text) => {
    return (
        <button className={styles.button}>{text}</button>
    )
}

export default LoginButton