import React, { useState, useRef } from 'react';
import axios from '../../axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from "./Save.module.css"
import {
    setCurrentTitle, setCurrentImgNum, setPrompt, setImages,
    setMask, setCurIdx, setPrediction, setLastPrediction, setCurPrompt
} from '../../store';


const ReadFileBtn = () => {
    const store = useSelector((state) => state.cur_project)

    const readFileName = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const readFile = async () => {
        await axios.post('/upload/readFile', { fileName: readFileName.current.value })
            .then(res => {
                console.log(res.filePath, 'res.파일경로');
                console.log(res.data.prompts, 'res.데이터');
                dispatch(setCurrentImgNum(res.data.imgNums));
                dispatch(setImages(res.data.images));
                dispatch(setMask(res.data.mask));
                dispatch(setCurIdx(res.data.curIdx));
                dispatch(setPrediction(res.data.prediction));
                dispatch(setLastPrediction(res.data.lastPrediction));
                dispatch(setCurPrompt(res.data.curPrompt));
                dispatch(setPrompt(res.data.prompts));
                dispatch(setCurrentTitle(res.data.title));
                navigate('/edit');
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <button className={styles.btn}>
            <input
                ref={readFileName}
                className={styles.readFile}
                type="file"
                accept=".corn"
                onChange={readFile}
                id="profileImg"
            ></input>
            <label htmlFor="profileImg">
                <img className={styles.readFileIcon} src='/images/export_icon.svg' />
            </label>
        </button>
    );
};
export default ReadFileBtn;