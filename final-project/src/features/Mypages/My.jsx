import React, { useState } from 'react'
import "./My.scss"

const My = () => {
    return (

        <form className="myBox" onSubmit="handleChange">
            <div className="userflex">
                <div className="userBox">
                    <div className="userImg"></div>
                    <button className="btnUp">이미지업로드</button>
                    <br></br>
                    <button className="btnDown">이미지제거</button>
                </div>
                <div>
                    <h2 className="myname">Kimhansol</h2>
                    <div className="changeName">수정</div>
                </div>
            </div>



            <div>
                <div className="list">
                    <div className="drop">이메일(아이디)</div>
                    <div className="midText"> hsring23@gmail.com</div>
                </div>
                <hr></hr>
                <div className="list">
                    <div className="drop">변경 비밀번호</div>
                    <div className="midText"> ******** </div>
                    <div className="changeBtn">수정</div>
                </div>
                <hr></hr>
                <div className="list">
                    <div className="drop">변경 비밀번호 재확인</div>
                    <div className="midText"> ******** </div>
                    <div></div>
                </div>
                <hr></hr>
                <div className="droplist">
                    <div className="drop">회원 탈퇴</div>
                    <div><button className="dropBtn">탈퇴하기</button>
                    </div>
                </div>
                <div className="dropText">탈퇴 시 작성하신 콘티가 모두 삭제되며 복구되지 않습니다.</div>
                <hr></hr>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }} >
                    <button className="btnUp1">나가기</button>
                    <button className="btnUp2">내정보수정하기</button>
                </div>

            </div >
        </form >
    )
}

export default My