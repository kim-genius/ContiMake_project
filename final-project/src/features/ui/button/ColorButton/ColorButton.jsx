import React from 'react'
import styles from './ColorButton.module.scss'
const ColorButton = ({text, func, parameter}) => {
    return (
        <button className={styles.button} onClick={()=>func(parameter)}>{text}</button>
    )
}

export default ColorButton