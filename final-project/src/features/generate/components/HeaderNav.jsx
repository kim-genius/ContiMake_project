import React, { useRef, useState, useEffect } from 'react'
import styles from '../styles/HeaderNav.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTitle } from '../../../store/index';
import ColorButton from '../../ui/button/ColorButton/ColorButton';
import { current } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom'
import SaveFileBtn from '../../Save/SaveFileBtn';
import ReadFileBtn from '../../Save/ReadFileBtn';
import axios from '../../../axios';

const HeaderNav = (props) => {
    const inputRef = useRef();
    const [showEditIcon, setShowEditIcon] = useState(true);
    const dispatch = useDispatch();
    const cur_project = useSelector(state => state.cur_project);
    const currentTitle = useSelector(state => state.currentTitle);

    /** 타이틀 수정 활성화 */
    const editTitle = () => {
        inputRef.current.disabled = null;
        inputRef.current.focus();
        setShowEditIcon(false)
    }

    const saveProject = () =>{
        console.log('왜 두번실해오디냐')
        axios
          .post("/generate/save", {
            title: cur_project.title,
            email: sessionStorage.getItem("email"),
            images: cur_project.images,
            prompts: cur_project.prompts
          }).then(res=>console.log(res.data))
    }

    return (
        <div className={styles.wrapper}>
            <Link to='/' >
                <img src='/images/home_icon.svg' width={25} className={styles.homeBtn} alt='homeBtn' />
            </Link>
            <div className={styles.inputArea}>
                <button
                    className={styles.editBtn}
                    onClick={() => editTitle()}>
                    <img src='/images/edit_icon.png' alt='titleEditBtn' width={16} />
                </button>
                <input
                    onChange={(e) => dispatch(setCurrentTitle(e.target.value))}
                    disabled="True"
                    ref={inputRef}
                    type="text"
                    defaultValue={cur_project.title}
                    className={styles.inputBox}
                />
            </div>
            <div className={styles.btnArea}>
                <ColorButton text={'저장'} func={saveProject}/>
                <SaveFileBtn></SaveFileBtn>
                <ReadFileBtn></ReadFileBtn>
            </div>
        </div>
    )
}

export default HeaderNav