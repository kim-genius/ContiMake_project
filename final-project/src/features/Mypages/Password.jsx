import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "./Nav.scss"

const Password = () => {
  const nav = useNavigate();
  return (
    <div>
      <h4>내정보수정</h4>
      <span>비밀번호</span>
      <input></input>
      <button className="checkpw" onClick={() => nav('/mypage')}>확인</button>
    </div>
  )
}

export default Password