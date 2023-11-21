import React from 'react'
import styles from './ColorButton.module.scss'
const ColorButton = ({text, func, parameter,generate}) => {
    if(generate) {
        return (
          <button className={styles.colorBtn_wait} disabled={true}>
            생성중...
          </button>
        );
    } else{
        return (
          <button className={styles.colorBtn} onClick={() => func(parameter)}>
            {text}
          </button>
        );
    }
}

export default ColorButton