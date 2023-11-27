import React, { useEffect } from 'react'
import styles from '../styles/PromptBox.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setPrompt } from '../../../store'
const PromptBox = () => {
  const cur_project = useSelector((state)=> state.cur_project)
  const prompts = cur_project.prompts;
  const cur_idx = cur_project.curIdx;
  const dispatch = useDispatch();
  useEffect(()=> {
    console.log(cur_project.prompts[cur_project.curIdx])
  }, [cur_idx])
  return (
    <div className={styles.wrapper}>
        <textarea
          value={cur_project.prompts[cur_project.curIdx]}
          onChange={(e)=> {
            let copy = [...prompts]
            copy[cur_idx] = e.target.value
            dispatch(setPrompt(copy))
          }}
          className={styles.textBox}
          ></textarea>
        
    </div>
  )
}

export default PromptBox