import React, { useState } from 'react'
import axios from '../../axios'

const FileUpload = () => {
    const [image, setImage] = useState({
        preview:
            "",
        data: ""
    });

    const Submit = (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append("file", image.data);

        console.log(image.data, "선택한이미지! ");
        console.log(formData, "들어가기전폼데이터");

        axios.post(
            "/upload/submit",
            formData,

            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        ).then(() =>
            console.log(
                formData,
                "then이후 폼데이터",
                image,
                "이건뭐",
                image.data,
                "이미지데이터"
            )
        );
    };

    const handleFileChange = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        };

        setImage(img);
    };

    return (
        <div>
            <input
                type="file"
                onChange={handleFileChange}
                name="Images"
                accept="Images/*"
            />

            <button onClick={Submit}>제출</button>
        </div>
    )
}

export default FileUpload