import React, { useRef, useState, useEffect } from 'react'
import styles from '../styles/HeaderNav.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTitle } from '../../../store/index';
import ColorButton from '../../ui/button/ColorButton/ColorButton';
import { current } from '@reduxjs/toolkit';


const HeaderNav = (props) => {
    const inputRef = useRef();
    const [showEditIcon, setShowEditIcon] = useState(true);
    const dispatch = useDispatch();
    const cur_project = useSelector(state => state.cur_project);

    /** 타이틀 수정 활성화 */
    const editTitle = () => {
        inputRef.current.disabled = null;
        inputRef.current.focus();
        setShowEditIcon(false)
    }

    useEffect(()=>{
        console.log(cur_project)
    },)
    return (
        <div className={styles.wrapper}>
            <div className={styles.inputArea}>
                    <button
                        className={styles.editBtn}
                        onClick={() => editTitle()}>
                        <img src='/images/edit_icon.png' alt='titleEditBtn' />
                    </button>
                <input
                    onChange={(e)=> dispatch(setCurrentTitle(e.target.value))}
                    disabled="True"
                    ref={inputRef}
                    type="text"
                    defaultValue={cur_project.title}
                    className={styles.inputBox}
                />
            </div>
            <div className={styles.btnArea}>
                <ColorButton text={'저장'}/>
                <img src='/images/export_icon.svg'/>
            </div>
        </div>
    )
}

export default HeaderNav