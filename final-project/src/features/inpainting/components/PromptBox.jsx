import React from 'react'
import styles from '../styles/PromptBox.module.scss'
import { useSelector } from 'react-redux'
const PromptBox = () => {
  const cur_project = useSelector((state)=> state.cur_project)
  const cur_prompt = cur_project.prompts[cur_project.curIdx]
  return (
    <div className={styles.wrapper}>
        <textarea
          defaultValue={cur_prompt}
          className={styles.textBox}
          ></textarea>
        
    </div>
  )
}

export default PromptBox