import React, { useState, useRef } from 'react'
import axios from '../../axios'
import styles from './FileUpload.module.css'

const FileUpload = ({ setModal }) => {

    const [image, setImage] = useState({
        preview:
            "",
        data: ""
    });

    // const [imgFile, setImgFile] = useState("");

    // const imgRef = useRef();

    // const saveImgFile = () => {
    //     const file = imgRef.current.files[0];
    //     console.log(file)
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onloadend = () => {
    //         setImgFile(reader.result);
    //     };
    // };

    const submit = (e) => {
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
        <form className={styles.modal}>
            {/* <img
                src={imgFile ? imgFile : `/images/icon/user.png`}
            /> */}

            <div className={styles.modalContent}>
                <div className={styles.close}>
                    <button className={styles.closeBtn} onClick={() => { setModal() }}>X</button><br></br>
                </div>

                {/* <label className={styles.signupProfileImgLabel} htmlFor="profileImg">프로필 이미지 선택</label> */}
                <input
                    type="file"
                    onChange={handleFileChange}
                    accept="Images/*"
                    id="profileImg"
                    name="Images"
                />
                {/* <input
                    type="file"
                    accept="image/*"
                    id="profileImg"
                    onChange={saveImgFile}
                    ref={imgRef}
                /><br></br> */}
                <img src={image.preview} alt="Preview" />
                <button onClick={submit} className={styles.submitBtn}>확인</button>
            </div>
        </form>
    )
}

export default FileUpload