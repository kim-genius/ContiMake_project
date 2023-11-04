import React from 'react'
import styles from './LoginButton.module.scss'

const LoginButton = ({ text, color }) => {

    return (
        <button style={{ backgroundColor: color }} className={styles.button}>{text}</button>
    )
}

export default LoginButton