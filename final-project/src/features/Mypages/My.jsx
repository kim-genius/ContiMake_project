import React, { useState } from 'react'
import styles from "./My.module.css"
import axios from '../../axios'
const My = () => {
        const [password,setPassword] = useState('')
        const [nickName,setNickname] = useState(sessionStorage.getItem('nickname'))
        const [email,setEmail] = useState(sessionStorage.getItem('email'))

    // axios.post('userpage/update',{email:sessionStorage.getItem('email')})

    return (

        <form className={styles.myBox} onSubmit={styles.handleChange}>
            <div className={styles.userflex}>
                <div className={styles.userBox}>
                    <div className={styles.userImg}></div>
                    <button className={styles.btnUp}>이미지업로드</button>
                    <br></br>
                    <button className={styles.btnDown}>이미지제거</button>
                </div>
                <div>
                    <input className={styles.myname} value={nickName}></input>
                    <div className={styles.changeName}>수정</div>
                </div>
            </div>



            <div>
                <div className={styles.list}>
                    <div className={styles.drop}>이메일(아이디)</div>
                    <div className={styles.midText}> {email}</div>
                </div>
                <hr></hr>
                <div className={styles.list}>
                    <div className={styles.drop}>변경 비밀번호</div>
                    <div className={styles.midText}> ******** </div>
                    <div className={styles.changeBtn}>수정</div>
                </div>
                <hr></hr>
                <div className={styles.list}>
                    <div className={styles.drop}>변경 비밀번호 재확인</div>
                    <div className={styles.midText}> ******** </div>
                    <div></div>
                </div>
                <hr></hr>
                <div className={styles.droplist}>
                    <div className={styles.drop}>회원 탈퇴</div>
                    <div><button className={styles.dropBtn}>탈퇴하기</button>
                    </div>
                </div>
                <div className={styles.dropText}>탈퇴 시 작성하신 콘티가 모두 삭제되며 복구되지 않습니다.</div>
                <hr></hr>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }} >
                    <button className={styles.btnUp1}>나가기</button>
                    <button className={styles.btnUp2}>내정보수정하기</button>
                </div>

            </div >
        </form >
    )
}

export default My