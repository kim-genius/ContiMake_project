import React, { useState, useRef } from 'react';
import axios from '../../axios';
import { Link } from 'react-router-dom';

const Save = () => {
    const [data, setData] = useState(['']);

    const [uploadedFile, setUploadedFile] = useState(null);
    const title = useRef();
    const image = useRef();

    const createFile = async () => {

        await axios.post('/upload/createFile', {
            data,
            title: title.current.value
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }

    const handleFileChange = (e) => {
        setUploadedFile(e.target.files[0]);
    }

    let formData = new FormData();
    let email = sessionStorage.getItem("email");
    formData.append("file", image.data);

    axios.post(
        "/upload/submit",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        },
    ).then((res) => {
        console.log(res, '요기!!!');
    })


    const readFile = async () => {
        await axios.get('/upload/readFile')
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <div>
            <input ref={title}></input>
            <img src={image.preview} alt="" />
            <input
                type="file"
                onChange={handleFileChange}
                accept="Images/*"
                id="profileImg"
                name="file"
                multiple //여러장업로드 할 때
                ref={image}
            />
            <button onClick={createFile}>Create File</button>

            {uploadedFile && (
                <a href={URL.createObjectURL(uploadedFile)} download={uploadedFile.name}>
                    다운로드
                </a>
            )}
            <button onClick={readFile}>Read File</button>
            <div>{data}</div>
            <div>{uploadedFile && uploadedFile.name}</div>
        </div>
    );
}


export default Save;