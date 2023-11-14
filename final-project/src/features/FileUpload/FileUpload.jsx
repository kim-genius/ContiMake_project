import React, { useState, useRef } from 'react'
import axios from '../../axios'
import styles from './FileUpload.module.css'

const FileUpload = ({ setModal }) => {

    const [qnaFile, setQnaFile] = useState([]);
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
        console.log(formData, "들어가기전폼데이터");
        console.log(sessionStorage.getItem("email"))
        try {
            await axios.post(
                "/upload/submit",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                },
            ).then((res) =>
                setQnaFile(res.data),

                console.log(
                    formData,
                    "then이후 폼데이터",
                    image,
                    "이건뭐",
                    image.data,
                    "이미지데이터"
                )
            );
        }
        catch (err) {
            console.error("Error during request:", err);
        }
    };

    const handleFileChange = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        };
        setImage(img);
    };

    return (
        <form className={styles.modal} onSubmit={(e) => e.preventDefault}>
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
                <img src={image.preview} />
                <button onClick={submit} className={styles.submitBtn}>확인</button>
            </div>
        </form>
    )
}

export default FileUpload