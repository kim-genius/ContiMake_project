import React from 'react'
import styles from './LoginButton.module.scss'

const LoginButton = ({ text, color, link }) => {

    return (
        <button style={{ backgroundColor: color }} link={link} className={styles.button}>{text}</button>
    )
}

export default LoginButton