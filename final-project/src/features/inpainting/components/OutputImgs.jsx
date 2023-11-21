import React from 'react';
import styles from '../styles/OutputImgs.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setCurIdx, setMask } from '../../../store/index'
const OutputImgs = () => {
    const cur_project = useSelector((state)=> state.cur_project)
    const dispatch = useDispatch();
    return (
        <div className={styles.wrapper}>
            {
                cur_project.images ?
                cur_project.images.map((item, idx) => {
                    return (
                        <img
                        className={styles.dummyImges} 
                        key={`img-${idx}`}
                        value={idx}
                        src={`data:image/png;base64,${item}`}
                        alt='generated_image'
                        onClick={()=> {
                            dispatch(setCurIdx(idx));
                        }}
                        />
                    )
                })
                : null
            }
        </div>
    )
}

export default OutputImgs