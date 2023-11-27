import React, { useState, useRef } from 'react';
import axios from '../../axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import styles from "./Save.module.css"

const Save = () => {

    const [readConti, setReadConti] = useState([]);
    console.log(readConti, '콘티정보')

    const store = useSelector((state) => state.cur_project)
    console.log(store)

    const readFile = async () => {
        await axios.get('/upload/readFile', { params: { title: store.title } })
            .then(res => {
                console.log(res.filePath, '파일경로');
                setReadConti(res.data)
            })
            .catch(err => {
                console.error(err);
            });
    };

    // <img src={'data:image/png;base64,' + readConti.images}></img> 
    return (
        <button className={styles.btn} onClick={readFile}>
            <img src='/images/readFile.png' />
        </button>
    );
}


export default Save;