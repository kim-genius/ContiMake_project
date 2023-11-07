import React, { useState } from 'react';
import axios from '../../axios';

function FileUpload() {

    return (

        <form className="fileFormBox" 
        action="/add" 
        method="POST"
            enctype="multipart/form-data">
            <h4>글쓰기</h4>
            <input name="title" />
            <input name="content" />
            <input type="file"
                name="img1"
                accept="image/*"
                multiple />
            <button type="submit">전송</button>
        </form>


    );
}

export default FileUpload;
