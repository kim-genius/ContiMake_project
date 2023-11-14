import React from 'react'
import styles from '../styles/OutputImgs.module.scss'
import { useSelector } from 'react-redux';
const OutputImgs = () => {
    const imgList = useSelector((state)=> state.cur_project.prompts)
    return (
        <div className={styles.wrapper}>
            {
                imgList.map((item, idx) => {
                    return (
                        // div태그 대신 img 태그 or component 들어갈 예정
                        <div className={styles.dummyImges}>
                            {idx+1}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default OutputImgs