import React from 'react'
import styles from './BoxItem.module.scss'
const BoxItem = (props) => {
  return (
            <div className={styles.title}>
                <h4>{props.title}</h4>
                <img
                    src='/images/triangle.svg'
                    alt='downarrow'
                    width={15}
                />
            </div>
  )
}

export default BoxItem