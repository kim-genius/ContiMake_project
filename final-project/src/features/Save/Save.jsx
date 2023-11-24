import React, { useState, useRef,useEffect } from 'react';
import axios from '../../axios';
import { Link } from 'react-router-dom';

const Save = () => {
    const [data, setData] = useState(['']);
    const [conti, setConti] = useState(['']);
    const[titleRead,setTitleRead] = useState('')
    const [content,setContent] = useState('')
    const [uploadedFile, setUploadedFile] = useState(null);
    const title = useRef();
    const image = useRef();

    const createFile = () => {

        axios.post('/upload/createFile', {
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
        console.log(e.traget.files[0])
        setUploadedFile(e.target.files[0]);
        
        // setTitleRead(e.target.files[0].name)
    }

    let formData = new FormData();
    let email = sessionStorage.getItem("email");
    formData.append("file", image.data);
    
    // axios.post(
    //     "/upload/submit",
    //     formData,
    //     {
    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //         },
    //     },
    // ).then((res) => {
    //     console.log(res, '요기!!!');
    //     sessionStorage.setItem('location',
    //         JSON.stringify(
    //             res.data))
    // })
    useEffect(()=>{
        setData(
            `https://cdn.aitimes.com/news/photo/202110/141144_143092_3153.png
            `

        )
    },[])

    const readFile = () => {
        axios.get('/upload/readFile',{params:{title:titleRead}})
            .then(res => {
                console.log(res.data);
                setContent(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <div>
            <input ref={title} onChange={(e)=>setTitleRead(e.target.value)}></input>
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
            <img src ={`${content}`}></img>
            <div>{uploadedFile && uploadedFile.name}</div>
        </div>
    );
}


export default Save;