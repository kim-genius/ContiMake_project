import React, { useState } from 'react';
import axios from '../../axios';

function FileUpload() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('file', selectedFile);

        axios
            .post('/exports/fileupload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error('File upload error: ', error);
            });
    };
    handleUpload()
    return (
        <form className="fileFormBox" 
        action="exports/fileupload" 
        method='POST' 
        enctype="multipart/form-data">
            <h4>글쓰기</h4>
            <input type="title" />
            <input type="content" />
            <input type="file"
                name="img1"
                accept="image/*"
                multiple />
            <button
                type="submit"
            >전송</button>
        </form>
    );
}

export default FileUpload;
