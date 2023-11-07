import React from 'react'
import styles from './ToggleBtn.module.scss'
const ToggleBtn = (props) => {
  return (
        <ul className={styles.tab}>
            <li>{props.tab1}</li>
            <li>{props.tab2}</li>
        </ul>
  )
}

export default ToggleBtn