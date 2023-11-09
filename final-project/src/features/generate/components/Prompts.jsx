import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../styles/Prompts.module.scss'
const Prompts = () => {
    const cur_project = useSelector(state => state.cur_project)
    const [promptsList, setPromptsList] = useState([]);
    
    useEffect(() => {
        setPromptsList(Array(parseInt(cur_project.imgNums)).fill(0))
    }, [cur_project.imgNums])
    console.log(cur_project)
    return (
        <div className={styles.inputArea}>
            {cur_project.imgNums > 0 ?
                promptsList.map((item, idx) => <input 
                placeholder={'컷' + (idx + 1)}
                className={styles.inputBox} 
                />)
                : null
            }
        </div>
    )
}

export default Prompts