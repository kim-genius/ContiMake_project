import React, { useState, useRef, useEffect } from 'react'
import axios from '../../axios'
import styles from './FileUpload.module.css'

const FileUpload = ({ setModal }) => {
    const [location, setLocation] = useState('images/defaultImage.png');
    const [image, setImage] = useState({
        preview:
            "",
        data: null, // 초기값을 null로 설정
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
        console.log(image.location, "location");
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
        setModal(false);
        setLocation(sessionStorage.getItem("location"));
    };

    useEffect(() => {
        // location이 변경될 때 수행할 동작
        window.location.href = '/mypage'
        console.log("Location이 변경되었습니다.", location);
    }, [location]);



    return (
        <div className={styles.modal} onSubmit={(e) =>
            e.preventDefault
        }>
            <div className={styles.modalContent}>
                <div className={styles.close}>
                    <button className={styles.closeBtn} onClick={() => { setModal() }}>X</button><br></br>
                </div>

                {
                    image.data !== null ?
                        <img className={styles.profile} src={image.preview} alt="" /> :
                        <img className={styles.defaultProfile} src='images/defaultImage.png' />
                }

                <input
                    type="file"
                    onChange={(e) => {
                        const img = {
                            preview: URL.createObjectURL(e.target.files[0]),
                            data: e.target.files[0],
                        };
                        setImage(img);
                    }}
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
