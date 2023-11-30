import React, { useState, useRef, useEffect } from 'react'
import axios from '../../axios'
import styles from './FileUpload.module.css'
import { useNavigate } from 'react-router-dom';

const FileUpload = ({ setModal, location, setLocation }) => {
    const navigate = useNavigate();
    // const [location, setLocation] = useState(sessionStorage.getItem('location'));
    const profile = useRef();
    const [image, setImage] = useState({
        preview:
            "",
        data: null, // 초기값을 null로 설정
    });

    const submit = async () => {
        let formData = new FormData();
        let email = sessionStorage.getItem("email");
        formData.append("file", image.data);
        formData.append("email", email);
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
        setModal(false);
    };

    const handleInputChange = (e) => {
        setLocation(URL.createObjectURL(e.target.files[0]))
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        };
        setImage(img);
    };

    return (
        <div className={styles.modal} onSubmit={(e) =>
            e.preventDefault
        }>
            <div className={styles.modalContent}>
                <div className={styles.close}>
                    <button className={styles.closeBtn} onClick={() => { setModal() }}>X</button><br></br>
                </div>

                <div className={styles.profile}
                    style={{
                        backgroundImage: `url(${location})`,
                        backgroundSize: 'cover',
                    }}
                ></div>

                <input
                    ref={profile}
                    type="file"
                    onChange={handleInputChange}
                    accept="Images/*"
                    id="profileImg"
                    name="file"
                // multiple //여러장업로드 할 때
                >
                </input>
                <label className={styles.imgLabel} htmlFor="profileImg">
                    프로필 이미지 선택</label>
                <button onClick={submit} className={styles.submitBtn}>확인</button>
            </div>
        </div >
    )
}

export default FileUpload;
