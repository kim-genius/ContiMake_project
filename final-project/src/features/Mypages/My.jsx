import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom'
import styles from "./My.module.css";
import VaildPassword from "../auth/join/components/VaildPassword";
import axios from "../../axios";
import FileUpload from "../FileUpload/FileUpload";

const My = () => {
  const navigate = useNavigate()
  const [modal, setModal] = useState(false);
  const [password, setPassword] = useState("1");
  const [samePassword, setSamePassword] = useState("");
  const [nickName, setNickname] = useState(sessionStorage.getItem("nickname"));
  const [email, setEmail] = useState(sessionStorage.getItem("email"));
  const [isNickNameEdit, setIsNickNameEdit] = useState(false);
  const [isPasswordNameEdit, setIsPasswordNameEdit] = useState(false);
  const nickNameRef = useRef();
  const passwordRef = useRef();
  const samePasswordRef = useRef();
  let [imagepath, setImagepath] = useState()

  const changeMyPage = () => {
    console.log('email', sessionStorage.getItem("email"), 'nick', nickName)
    axios
      .post("/userpage/update", {
        email: sessionStorage.getItem("email"),
        nickName: nickName,
        password: password,
      })
      .then((res) => {
        if (res.data == 'success') {
          sessionStorage.setItem('nickname', nickName)
          alert('변경이 완료됐습니다.')
          window.location.href='/'
        } else {
          alert('오류입니다')
        }

      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  };

  const enterInput = (event, ref, setState) => {
    if (event.keyCode == 13) {
      setState(false);
      ref.current.blur();
    }
  };
  const changeInput = (ref, setState) => {
    ref.current.focus();
    setState(true);
  };

  const removeImg = () => {

  };
  
  let location = JSON.parse(sessionStorage.getItem("location"))


  const Withdrawal = () => {
    console.log('회원탈퇴')
    const isConfirmed = window.confirm('정말 탈퇴하시겠어요?');

    if (isConfirmed) {
      axios
        .post("/userpage/withdrawl", {
          email: sessionStorage.getItem("email"),
          nickName: nickName,
          password: password,
        })
        .then((res) => {
          if (res.data === 'success') {
            alert('탈퇴가 완료되었습니다.');
            sessionStorage.clear()
            navigate('/');
          } else {
            alert('Error occurred.');
          }
        })
        .catch((error) => {
          console.error('Error during update:', error);
          alert('An error occurred during the update.');
        });
    } else {
      // 취소 눌렀을 시
      console.log('탈퇴취소');
    }
  }



  return (
    <form className={styles.myBox} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.userflex}>
        <div className={styles.userBox}>
          <div className={styles.userImg} style={{
            backgroundImage: `url(${location})`,
            backgroundSize: 'cover',
          }}>
          </div>
          <button onClick={() => setModal(true)} className={styles.btnUp}>이미지업로드</button>
          <br></br>
          <button onClick={removeImg} className={styles.btnDown}>이미지제거</button>
        </div>
        <div className={styles.userBoxRight}>
          <input
            ref={nickNameRef}
            className={styles.myname}
            value={nickName}
            onChange={(e) => setNickname(e.target.value)}
            readOnly={!isNickNameEdit}
            onKeyDown={(e) => enterInput(e, nickNameRef, setIsNickNameEdit)}
          ></input>
          <div
            className={styles.changeName}
            onClick={() => {
              changeInput(nickNameRef, setIsNickNameEdit);
            }}
          >
            수정
          </div>
        </div>
      </div>

      {modal && <FileUpload setModal={setModal}></FileUpload>}

      <div>
        <div className={styles.list}>
          <div className={styles.drop}>이메일(아이디)</div>
          <div className={styles.midText}> {email}</div>
        </div>
        <hr></hr>
        <div className={styles.list}>
          <div className={styles.drop}>변경 비밀번호</div>
          <input
            type="password"
            ref={passwordRef}
            className={styles.midText}
            onChange={(e) => setPassword(e.target.value)}
            readOnly={!isPasswordNameEdit}
          ></input>
          <div
            className={styles.changeBtn}
            onClick={() => {
              changeInput(passwordRef, setIsPasswordNameEdit);
            }}
          >
            수정
          </div>
        </div>
        <hr></hr>
        <div className={styles.list}>
          <div className={styles.drop}>변경 비밀번호 재확인</div>
          <input
            type="password"
            ref={samePasswordRef}
            className={styles.midText}
            onChange={(e) => setSamePassword(e.target.value)}
            readOnly={!isPasswordNameEdit}
            onKeyDown={(e) =>
              enterInput(e, samePasswordRef, setIsPasswordNameEdit)
            }
          ></input>
        </div>
        <div className={styles.myPageVaildPassword}>
          <VaildPassword
            password={password}
            samePassword={samePassword}
          ></VaildPassword>
        </div>
        <hr></hr>
        <div className={styles.droplist}>
          <div className={styles.drop}>회원 탈퇴</div>
          <div>
            <button className={styles.dropBtn} onClick={Withdrawal}>탈퇴하기</button>
          </div>
        </div>
        <div className={styles.dropText}>
          탈퇴 시 작성하신 콘티가 모두 삭제되며 복구되지 않습니다.
        </div>
        <hr></hr>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button className={styles.btnUp1}>나가기</button>
          <button className={styles.btnUp2} onClick={changeMyPage}>
            내정보수정하기
          </button>
        </div>
      </div>
    </form >
  );
};

export default My;
