import React from 'react'
import styles from './LoginButton.module.scss'

const LoginButton = ({ text, color, link,func }) => {

    return (
        <button style={{ backgroundColor: color }} link={link} onClick={func} className={styles.button} >{text}</button>
    )
}

export default LoginButton