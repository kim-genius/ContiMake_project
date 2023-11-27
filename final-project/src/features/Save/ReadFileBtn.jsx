import React, { useState, useRef } from 'react';
import axios from '../../axios';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./Save.module.css"
import {
    setCurrentTitle, setCurrentImgNum, setPrompt, setImages,
    setMask, setCurIdx, setPrediction, setLastPrediction, setCurPrompt
} from '../../store';


const ReadFileBtn = () => {
    const store = useSelector((state) => state.cur_project)

    const readFileName = useRef();
    const dispatch = useDispatch();

    const readFile = async () => {
        await axios.post('/upload/readFile', { fileName: readFileName.current.value })
            .then(res => {
                console.log(res.filePath, 'res.파일경로');
                console.log(res.data.title, 'res.데이터');

                dispatch(setCurrentTitle(res.data.title));
                dispatch(setCurrentImgNum(res.data.imgNums));
                // dispatch(setPrompt(res.data.prompts));
                dispatch(setImages(res.data.images));
                // dispatch(setCurIdx(res.data.curIdx));
                // dispatch(setPrediction(res.data.prediction));
                // dispatch(setLastPrediction(res.data.lastPrediction));
                // dispatch(setCurPrompt(res.data.curPrompt));
            })
            .catch(err => {
                console.error(err);
            });
    };

    // <img src={'data:image/png;base64,' + readConti.images}></img> 

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
                <img src='/images/readFile.png' />
            </label>
        </button>
    );
};
export default ReadFileBtn;