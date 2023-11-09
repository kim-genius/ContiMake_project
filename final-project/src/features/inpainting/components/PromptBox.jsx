import React from 'react'
import styles from '../styles/PromptBox.module.scss'
const PromptBox = () => {
  return (
    <div className={styles.wrapper}>
        <textarea
          defaultValue={'생성된 이미지의 프롬프트 텍스트'}
          className={styles.textBox}
          ></textarea>
        
    </div>
  )
}

export default PromptBox