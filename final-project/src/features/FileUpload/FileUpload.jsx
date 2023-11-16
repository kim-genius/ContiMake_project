import React, { useState, useRef } from 'react'
import axios from '../../axios'
import styles from './FileUpload.module.css'

const FileUpload = ({ setModal }) => {

    const [image, setImage] = useState({
        preview:
            "",
        data: ""
    });

    const submit = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        let email = sessionStorage.getItem("email");
        formData.append("file", image.data);
        formData.append("email", email);

        console.log(image.data, "선택한이미지! ");
        console.log(sessionStorage.getItem("email"))
        console.log(image.preview, "들어간파일");
        console.log(formData.getAll('file'))

        try {
            await axios.post(
                "/upload/submit",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                },
            ).then((res) => {
                console.log(res, '요기!!!');

                sessionStorage.setItem('location',
                    JSON.stringify(
                        res.data
                    )

                )
            }
            );
        }
        catch (err) {
            console.error("Error during request:", err);
        }
        setModal(false)
    };

    const handleFileChange = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        };
        setImage(img);
    };

    let location = JSON.parse(sessionStorage.getItem("location"))

    return (
        <div className={styles.modal} onSubmit={(e) => e.preventDefault}>
            <div className={styles.modalContent}>
                <div className={styles.close}>
                    <button className={styles.closeBtn} onClick={() => { setModal() }}>X</button><br></br>
                </div>
                <label className={styles.imgLabel} htmlFor="profileImg">프로필 이미지 선택</label><br></br>
                <input
                    type="file"
                    onChange={handleFileChange}
                    accept="Images/*"
                    id="profileImg"
                    name="file"
                // multiple //여러장업로드 할 때
                />
                <img src={location} />
                <button onClick={submit} className={styles.submitBtn}>확인</button>
            </div>
        </div>
    )
}

export default FileUpload
