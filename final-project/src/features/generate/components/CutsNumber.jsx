import React, { useState,useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentImgNum } from '../../../store'
import styles from '../styles/CutsNumber.module.scss'
const CutsNumber = () => {
    const [number, setNumber] = useState(0)
    const inputRef = useRef([]);
    const dispatch = useDispatch();
    const cur_project = useSelector(state => state.cur_project)
    return (
            <div className={styles.inputArea}>
                <input 
                type='range' 
                value={cur_project.imgNums} 
                min={1} max={20} 
                ref={el=>inputRef.current[0] = el}
                onChange={()=> dispatch(setCurrentImgNum(inputRef.current[0].value))}
                />
                <input type='number' 
                value={cur_project.imgNums} 
                min={1} max={20} 
                ref={el=>inputRef.current[1] = el}
                onChange={()=> dispatch(setCurrentImgNum(inputRef.current[1].value))}
                />
            </div>
    )
}

export default CutsNumber