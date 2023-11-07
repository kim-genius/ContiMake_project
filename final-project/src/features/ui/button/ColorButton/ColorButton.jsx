import React from 'react'
import styles from './ColorButton.module.scss'
const ColorButton = ({text}) => {
    return (
        <button className={styles.button}>{text}</button>
    )
}

export default ColorButton