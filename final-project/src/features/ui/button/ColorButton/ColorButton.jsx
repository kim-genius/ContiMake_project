import React from 'react'
import styles from './ColorButton.module.scss'
const ColorButton = ({text, func}) => {
    return (
        <button className={styles.button} onClick={func}>{text}</button>
    )
}

export default ColorButton