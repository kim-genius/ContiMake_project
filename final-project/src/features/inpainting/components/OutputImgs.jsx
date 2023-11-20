import React from 'react'
import styles from '../styles/OutputImgs.module.scss'
import { useSelector } from 'react-redux';
const OutputImgs = () => {
    const cur_project = useSelector((state)=> state.cur_project)
    return (
        <div className={styles.wrapper}>
            {
                cur_project.images ?
                cur_project.images.map((item, idx) => {
                    return (
                        // div태그 대신 img 태그 or component 들어갈 예정
                        <img
                        className={styles.dummyImges} 
                        key={`img-${idx}`}
                        src={`data:image/png;base64,${item}`}
                        alt='generated_image'
                        />
                    )
                })
                : null
            }
        </div>
    )
}

export default OutputImgs